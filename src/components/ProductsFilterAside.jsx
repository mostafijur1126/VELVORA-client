import React from "react";

const ProductsFilterAside = ({ filters }) => {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
            Filters
          </h3>
          <div className="mt-4 space-y-6">
            {/* Category Filter */}
            <div>
              <h4 className="text-xs font-medium text-gray-700">Category</h4>
              <div className="mt-2 space-y-2">
                {filters.categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-black focus:ring-0"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h4 className="text-xs font-medium text-gray-700">Size</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {filters.sizes.map((size) => (
                  <button
                    key={size}
                    className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:border-black hover:bg-black/5 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h4 className="text-xs font-medium text-gray-700">Color</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {filters.colors.map((color) => (
                  <button
                    key={color}
                    className="rounded-md border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:border-black hover:bg-black/5 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="text-xs font-medium text-gray-700">Price</h4>
              <div className="mt-2 space-y-2">
                {filters.priceRanges.map((range) => (
                  <label
                    key={range}
                    className="flex items-center gap-2 text-xs text-gray-600"
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
        <button className="w-full rounded-full border border-gray-300 py-2 text-xs font-medium text-gray-700 hover:bg-black hover:text-white transition-colors">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductsFilterAside;
