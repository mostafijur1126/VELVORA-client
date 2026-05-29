import ProductCard from "@/components/ProductCard";
import React from "react";

const NewArrivalsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/new-arrivals`);
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;
