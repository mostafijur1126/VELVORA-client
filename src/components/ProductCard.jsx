"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Calculate discount percentage if not provided
  const discount =
    product.discountPercentage ||
    Math.round(((product.price - product.salePrice) / product.price) * 100);

  // Rating stars (assuming rating out of 5)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="h-3 w-3 text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="h-3 w-3 text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar
            key={`empty-${i}`}
            className="h-3 w-3 text-gray-300 dark:text-gray-600"
          />
        ))}
        <span className="ml-1 text-[11px] text-gray-500 dark:text-gray-400">
          ({product.totalReviews || 0})
        </span>
      </div>
    );
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white">
      {/* Image Container with Hover Zoom */}
      <Link
        href={`/product/${product.slug || product._id}`}
        className="relative block overflow-hidden"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover  ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setIsImageLoaded(true)}
            priority={false}
            quality={90}
          />
          {/* Skeleton loader */}
          {!isImageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
          )}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-black px-2 py-1 text-[10px] font-bold text-white dark:bg-white ">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white dark:bg-black/50 dark:hover:bg-black"
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="h-4 w-4 text-red-500" />
          ) : (
            <FaRegHeart className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          )}
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 py-3 text-center text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          Quick View
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col gap-1 p-4">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {product.brand}
          </span>
          {product.rating && renderStars(product.rating)}
        </div>

        {/* Title */}
        <Link href={`/product/${product.slug || product._id}`}>
          <h3 className="line-clamp-1 text-base font-semibold text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
            {product.title}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          {product.salePrice ? (
            <>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${product.salePrice}
              </span>
              <span className="text-sm text-gray-400 line-through dark:text-gray-500">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
          )}
        </div>

        {/* Color Options (if available) */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2 flex items-center gap-1.5">
            {product.colors.slice(0, 4).map((color, idx) => (
              <div
                key={idx}
                className="h-3 w-3 rounded-full border border-gray-300 dark:border-gray-600"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-gray-400">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Add to Cart Button */}
        <button className="mt-4 w-full rounded-full border border-gray-300 py-2 text-[11px] font-semibold uppercase tracking-wider text-gray-700 transition-all hover:bg-black hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
