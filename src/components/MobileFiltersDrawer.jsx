"use client";
import React, { useState } from "react";
import { FaChevronDown, FaSlidersH } from "react-icons/fa";

const MobileFiltersDrawer = ({ filters, products }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-medium text-black">{products?.length}</span>{" "}
          products
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700"
          >
            <FaSlidersH className="h-3 w-3" />
            Filters
          </button>
          <div className="relative">
            <select className="appearance-none rounded-full border border-gray-300 bg-transparent px-4 py-2 pr-8 text-xs font-medium text-gray-700 focus:outline-none">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Selling</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-80 max-w-full bg-white z-50 p-6 shadow-xl overflow-y-auto transform transition-transform lg:hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>
            {/* Reuse filter content from desktop sidebar */}
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-xs font-medium text-gray-700">Category</h4>
                <div className="mt-2 space-y-2">
                  {filters.categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-xs"
                    >
                      <input type="checkbox" className="rounded" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
              {/* Size */}
              <div>
                <h4 className="text-xs font-medium text-gray-700">Size</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {filters.sizes.map((size) => (
                    <button
                      key={size}
                      className="rounded-md border border-gray-300 px-3 py-1 text-xs"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Color */}
              <div>
                <h4 className="text-xs font-medium text-gray-700">Color</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {filters.colors.map((color) => (
                    <button
                      key={color}
                      className="rounded-md border border-gray-300 px-3 py-1 text-xs"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              {/* Price */}
              <div>
                <h4 className="text-xs font-medium text-gray-700">Price</h4>
                <div className="mt-2 space-y-2">
                  {filters.priceRanges.map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-2 text-xs"
                    >
                      <input type="checkbox" className="rounded" />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full rounded-full bg-black py-2 text-xs font-medium text-white"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileFiltersDrawer;
