import React from "react";
import { products } from "../constants";
import ProductDetail from "./ProductDetail";

const PopularProducts: React.FC = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red ">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat from-slate-gray">
          Experience top notch quality and style with our sought after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product, i) => (
            <ProductDetail
              image={product.imgURL}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
