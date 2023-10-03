// src/components/CurrencyDropdown.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../Action/currencyActions';

const CurrencyDropdown = () => {
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const currency = e.target.value;
    dispatch(setCurrency(currency));
  };

  return (
    <div className="absolute md:left-19 mt-8 lg:flex h-10 w-20 rounded-md outline-none border focus:border-black shadow-md top-28">
      <select
        value={selectedCurrency}
        onChange={handleChange}
        className="ring-1 ring-yellow-600 h-10 w-20 text-blue-700 bg-gray-100 rounded focus:outline-none font-semibold"
      >
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
