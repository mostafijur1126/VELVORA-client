import React from "react";
import { Card } from "@heroui/react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Card className="rounded-lg">
      <div className="relative h-140 w-full overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
        ></Image>
      </div>
      <div>
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p>{product.shortDescription}</p>
        <p>
          Price:{" "}
          <span className="text-xl line-through text-red-400">
            {product.price}${" "}
          </span>
          <span className="text-2xl font-bold">{product.salePrice}$</span>
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
