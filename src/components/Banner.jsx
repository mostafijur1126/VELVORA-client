import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co.com/YvmMHXv/freestocks-3-Q3ts-J01nc-unsplash.jpg"
          alt="Luxury fashion hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white md:items-start md:px-12 lg:px-24 md:text-left">
        <div className="max-w-2xl space-y-6">
          {/* Small badge */}
          <p className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
            New Arrivals
          </p>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Timeless Elegance,
            <br />
            Modern Edge
          </h1>

          {/* Description */}
          <p className="text-base font-light leading-relaxed text-white/90 sm:text-lg md:text-xl max-w-xl">
            Discover curated luxury pieces that define sophistication. Free
            shipping & premium packaging.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/new"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
            >
              Shop Now
            </Link>
            <Link
              href="/sale"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Explore Sale
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
