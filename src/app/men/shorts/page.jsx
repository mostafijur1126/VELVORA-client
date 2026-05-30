import MobileFiltersDrawer from "@/components/MobileFiltersDrawer";
import ProductCard from "@/components/ProductCard";
import ProductsFilterAside from "@/components/ProductsFilterAside";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const TShirtPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/men?gender=Men&subCategory=shorts`,
  );
  const products = await res.json();
  const filters = {
    categories: ["Dresses", "Tops", "Jeans", "Jackets", "Skirts"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Beige", "Navy", "Rose"],
    priceRanges: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
  };

  return (
    <div className="w-full">
      <div className="mx-auto px-4 py-10 md:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold pb-6 md:text-4xl">
          Men - Hoodie (<span>{products.length}</span>)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters – Desktop */}
          <ProductsFilterAside
            filters={filters}
            products={products}
          ></ProductsFilterAside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Mobile Filters Drawer (simple slide-in) */}
            <MobileFiltersDrawer filters={filters}></MobileFiltersDrawer>

            {/* Products Grid – responsive columns */}
            {products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 rounded-full bg-gray-100 p-6">
                  <FaHeart className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  No products available
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Check back later or explore other categories.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-black hover:text-white transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtPage;
