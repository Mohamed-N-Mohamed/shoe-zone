import React from "react";

const Select = ({ products, setFilteredProducts }) => {
  const handleOnSelect = (e) => {
    const { value } = e.target;

    if (value === "Price (Low to High)") {
      const priceLow = products.sort((a, b) => a.price - b.price);
      setFilteredProducts(priceLow);
    } else if (value === "Price (High to Low)") {
      const priceHigh = products.sort((a, b) => b.price - a.price);
      setFilteredProducts(priceHigh);
    } else {
      const sortByName = products.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(sortByName);
    }
  };
  return (
    <div className='select'>
      <label className=' mb-2 text-lg px-2'>Sort by</label>
      <select
        className='bg-gray-50 border border-gray-300 text-sm rounded-lg px-4'
        onChange={handleOnSelect}
      >
        <option value='Name (A - Z)'>Name (A - Z)</option>
        <option value='Price (High to Low)'>Price (High to Low)</option>
        <option value='Price (Low to High)'>Price (Low to High)</option>
      </select>
    </div>
  );
};

export default Select;
