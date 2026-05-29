"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaRegHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
  FaBox,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const categories = {
    men: {
      label: "Men",
      href: "/men",
      sections: [
        {
          label: "Featured",
          items: [
            { name: "New Arrivals", href: "/men/new-arrivals" },
            { name: "Best Sellers", href: "/men/best-sellers" },
          ],
        },
        {
          label: "Clothing",
          items: [
            { name: "T-Shirts", href: "/men/t-shirts" },
            { name: "Hoodies & Sweatshirts", href: "/men/hoodies" },
            { name: "Shorts", href: "/men/shorts" },
            { name: "Pants & Joggers", href: "/men/pants" },
            { name: "Jackets & Outerwear", href: "/men/jackets" },
          ],
        },
        {
          label: "Footwear",
          items: [
            { name: "Sneakers", href: "/men/sneakers" },
            { name: "Slides", href: "/men/slides" },
          ],
        },
      ],
    },
    women: {
      label: "Women",
      href: "/women",
      sections: [
        {
          label: "Featured",
          items: [
            { name: "New Arrivals", href: "/women/new-arrivals" },
            { name: "Best Sellers", href: "/women/best-sellers" },
          ],
        },
        {
          label: "Clothing",
          items: [
            { name: "Tops", href: "/women/tops" },
            { name: "Dresses", href: "/women/dresses" },
            { name: "Leggings & Tights", href: "/women/leggings" },
            { name: "Jeans", href: "/women/jeans" },
            { name: "Jackets", href: "/women/jackets" },
          ],
        },
        {
          label: "Footwear",
          items: [
            { name: "Sneakers", href: "/women/sneakers" },
            { name: "Heels", href: "/women/heels" },
          ],
        },
      ],
    },
    kids: {
      label: "Kids",
      href: "/kids",
      sections: [
        {
          label: "Shop By",
          items: [
            { name: "New Arrivals", href: "/kids/new-arrivals" },
            { name: "Boys", href: "/kids/boys" },
            { name: "Girls", href: "/kids/girls" },
          ],
        },
        {
          label: "Categories",
          items: [
            { name: "Shoes", href: "/kids/shoes" },
            { name: "Clothing Sets", href: "/kids/clothing" },
          ],
        },
      ],
    },
    brands: {
      label: "Brands",
      href: "/brands",
      sections: [
        {
          label: "Top Brands",
          items: [
            { name: "Nike", href: "/brands/nike" },
            { name: "Adidas", href: "/brands/adidas" },
            { name: "Zara", href: "/brands/zara" },
            { name: "H&M", href: "/brands/h&m" },
            { name: "Gucci", href: "/brands/gucci" },
            { name: "Puma", href: "/brands/puma" },
          ],
        },
      ],
    },
  };

  const profileItems = [
    {
      name: "My Profile",
      href: "/profile",
      icon: <FaUser className="w-3.5 h-3.5" />,
    },
    {
      name: "My Orders",
      href: "/orders",
      icon: <FaBox className="w-3.5 h-3.5" />,
    },
    {
      name: "Wishlist",
      href: "/wishlist",
      icon: <FaRegHeart className="w-3.5 h-3.5" />,
    },
    {
      name: "Saved Addresses",
      href: "/addresses",
      icon: <FaMapMarkerAlt className="w-3.5 h-3.5" />,
    },
    {
      name: "Payment Methods",
      href: "/payment",
      icon: <FaCreditCard className="w-3.5 h-3.5" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <FaCog className="w-3.5 h-3.5" />,
    },
  ];

  const DesktopDropdown = ({ category }) => (
    <div className="group relative">
      <Link
        href={category.href}
        className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-150"
      >
        {category.label}
        <FaChevronDown className="h-2.5 w-2.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      <div className="absolute left-0 top-full h-2 w-full" />

      <div className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[200px] rounded-xl border border-gray-200 bg-white py-2 shadow-lg opacity-0 invisible translate-y-[-6px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 dark:border-gray-800 dark:bg-gray-900">
        {category.sections.map((section, i) => (
          <div key={section.label}>
            {i > 0 && (
              <div className="my-1.5 h-px bg-gray-200 mx-3 dark:bg-gray-800" />
            )}
            <p className="px-4 pt-2 pb-1 text-[10px] font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
              {section.label}
            </p>
            {section.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const MobileAccordion = ({ categoryKey, category }) => {
    const isOpen = mobileExpandedSection === categoryKey;
    const allItems = category.sections.flatMap((s) => s.items);
    return (
      <div className="border-b border-gray-200 dark:border-gray-800">
        <button
          className="flex w-full items-center justify-between py-3.5 text-[14px] font-medium text-gray-900 dark:text-white"
          onClick={() => setMobileExpandedSection(isOpen ? null : categoryKey)}
        >
          {category.label}
          <FaChevronDown
            className={`h-3 w-3 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-96 pb-3" : "max-h-0"
          }`}
        >
          {allItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 pl-4 text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gray-900 py-2 text-center text-[11px] font-medium tracking-widest text-gray-300 uppercase dark:bg-black dark:text-gray-500">
        Free shipping on orders over $75 &nbsp;·&nbsp; New arrivals every week
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
        <div className=" w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-[60px] items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 text-[22px] font-bold tracking-[0.12em] text-gray-900 dark:text-white"
            >
              VELVORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {Object.entries(categories).map(([key, cat]) => (
                <DesktopDropdown key={key} category={cat} />
              ))}
              <Link
                href="/sale"
                className="px-3 py-2 text-[13px] font-semibold text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 transition-colors duration-150"
              >
                Sale
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-1">
              <button
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <FaSearch className="h-4 w-4" />
              </button>

              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <FaRegHeart className="h-4 w-4" />
              </Link>

              <Link
                href="/cart"
                aria-label="Cart"
                className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <FaShoppingBag className="h-4 w-4" />
                <span className="absolute right-1 top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gray-900 text-[9px] font-semibold text-white dark:bg-white dark:text-gray-900">
                  3
                </span>
              </Link>

              {/* <ThemeSwitch /> */}

              {/* Profile dropdown */}
              <div
                className="relative hidden lg:block"
                ref={profileDropdownRef}
              >
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="ml-1 flex items-center gap-2 rounded-lg border border-gray-200 bg-white py-1.5 pl-1.5 pr-2.5 text-[13px] font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white dark:bg-white dark:text-gray-900">
                    JD
                  </div>
                  John
                  <FaChevronDown
                    className={`h-2.5 w-2.5 text-gray-400 transition-transform duration-200 ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-lg z-50 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center gap-3 px-4 pb-3 pt-1">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-[12px] font-bold text-white dark:bg-white dark:text-gray-900">
                        JD
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-gray-900 dark:text-white">
                          John Doe
                        </p>
                        <p className="truncate text-[11px] text-gray-500 dark:text-gray-400">
                          john@example.com
                        </p>
                      </div>
                    </div>
                    <div className="mx-3 mb-2 h-px bg-gray-200 dark:bg-gray-800" />

                    {profileItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 text-[13px] text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <span className="text-gray-400">{item.icon}</span>
                        {item.name}
                      </Link>
                    ))}

                    <div className="mx-3 my-2 h-px bg-gray-200 dark:bg-gray-800" />
                    <Link
                      href="/logout"
                      className="flex items-center gap-3 px-4 py-2 text-[13px] text-red-600 transition-colors hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-950"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      <FaSignOutAlt className="h-3.5 w-3.5" />
                      Sign out
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile menu toggle */}
              <button
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <FaBars className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-[320px] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-gray-900 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[60px] items-center justify-between border-b border-gray-200 px-5 dark:border-gray-800">
          <Link
            href="/"
            className="text-[20px] font-bold tracking-[0.12em] text-gray-900 dark:text-white"
          >
            VELVORA
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <FaTimes className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-60px)] px-5 py-4">
          {Object.entries(categories).map(([key, cat]) => (
            <MobileAccordion key={key} categoryKey={key} category={cat} />
          ))}
          <div className="border-b border-gray-200 dark:border-gray-800">
            <Link
              href="/sale"
              className="block py-3.5 text-[14px] font-semibold text-red-600 dark:text-red-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sale
            </Link>
          </div>

          {/* Mobile profile section */}
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-[12px] font-bold text-white dark:bg-white dark:text-gray-900">
                JD
              </div>
              <div>
                <p className="text-[13px] font-semibold text-gray-900 dark:text-white">
                  John Doe
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  john@example.com
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {profileItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-[12px] text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/logout"
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-950"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaSignOutAlt className="h-3.5 w-3.5" />
              Sign out
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden dark:bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
