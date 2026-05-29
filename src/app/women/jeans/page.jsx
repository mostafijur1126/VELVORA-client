import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaSlidersH,
  FaTimes,
  FaChevronDown,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import ProductCard from "@/components/ProductCard";

const WomenJeansPage = async () => {
  const category = ["Jeans"];
  const gender = ["Unisex", "Women"];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/women?gender=${gender.join(",")}&subCategory=${category.join(",")}`,
    { next: { revalidate: 3600 } }, // ISR – revalidate every hour
  );
  const products = await res.json();

  // Dummy filters – in a real app, you'd get these from the API or define statically
  const filters = {
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
    colors: ["Black", "Blue", "White", "Beige", "Gray"],
    priceRanges: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531093319975-e720fdf2a375?q=80&w=2070&auto=format"
          alt="Women's Jeans Collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
            Women's Jeans
          </h1>
          <p className="mt-2 text-sm md:text-base font-light text-white/80 max-w-xl mx-auto md:mx-0">
            Timeless denim crafted for comfort and elegance. Discover your
            perfect fit.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
              {products.length} Styles
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                  Filters
                </h3>
                <div className="mt-4 space-y-6">
                  {/* Size Filter */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Size
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {filters.sizes.map((size) => (
                        <button
                          key={size}
                          className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs text-gray-700 dark:text-gray-300 hover:border-black hover:bg-black/5 dark:hover:border-white dark:hover:bg-white/10 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Color Filter */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Color
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {filters.colors.map((color) => (
                        <button
                          key={color}
                          className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs text-gray-700 dark:text-gray-300 hover:border-black hover:bg-black/5 dark:hover:border-white dark:hover:bg-white/10 transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Price Filter */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Price
                    </h4>
                    <div className="mt-2 space-y-2">
                      {filters.priceRanges.map((range) => (
                        <label
                          key={range}
                          className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-black focus:ring-0"
                          />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full rounded-full border border-gray-300 py-2 text-xs font-medium text-gray-700 hover:bg-black hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black transition-colors">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-medium text-black dark:text-white">
                  {products.length}
                </span>{" "}
                products
              </p>
              <div className="flex items-center gap-3">
                <button className="lg:hidden flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
                  <FaSlidersH className="h-3 w-3" />
                  Filters
                </button>
                <div className="relative">
                  <select className="appearance-none rounded-full border border-gray-300 bg-transparent px-4 py-2 pr-8 text-xs font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300 focus:outline-none">
                    <option>Sort by: Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 rounded-full bg-gray-100 p-6 dark:bg-gray-800"></div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  No products available
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Check back later or explore other categories.
                </p>
                <Link
                  href="/women"
                  className="mt-6 inline-flex items-center rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-black hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Back to Women's Collection
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenJeansPage;
