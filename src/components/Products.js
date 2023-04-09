import { useState } from "react";
import { data } from "@/data";

const Products = ({ products }) => {
  return (
    <div className='products p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {products.length === 0 && <p>No Item has been found</p>}
      {products.map(({ id, name, price, image }) => (
        <div className='product-item' key={id}>
          <div className='product-img'>
            <img src={image} alt='shoe image' className='w-[80%]' />
          </div>
          <div className='product-title md:flex md:justify-between py-2'>
            <div className='name w-[50%]'>
              <h2>{name}</h2>
            </div>
            <div className='price w-[40%] '>
              <h3>£{price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
