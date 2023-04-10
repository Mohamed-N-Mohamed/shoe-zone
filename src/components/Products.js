import { useState } from "react";
import { data } from "@/data";

const Products = ({ products, handleOnClick }) => {
  return (
    <div className='products p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {products.length === 0 && <p>No Item has been found</p>}
      {products.map((item) => (
        <div className='product-item' key={item.id}>
          <div className='product-img'>
            <img src={item.image} alt='shoe image' className='w-[80%]' />
          </div>
          <div className='product-title md:flex md:justify-between py-2'>
            <div className='name w-[50%]'>
              <h2>{item.name}</h2>
            </div>
            <div className='price w-[40%] '>
              <h3>£{item.price}</h3>
            </div>
          </div>

          <button
            className='py-2 px-4 border rounded bg-black text-white text-sm block'
            onClick={() => handleOnClick(item)}
          >
            Add to basket
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
