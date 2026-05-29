import ProductCard from "@/components/ProductCard";
import React from "react";

const TShirtPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/men?gender=Men&subCategory=shorts`,
  );
  const products = await res.json();
  return (
    <div className="w-full mx-auto px-4 md:px-6 lg:px-8 py-20">
      <div>
        <h1 className="text-4xl font-semibold pb-6">
          Men - Short's (<span>{products.length}</span>)
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default TShirtPage;
