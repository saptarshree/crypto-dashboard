import React, { useState } from "react";
import Searchbar from "./Searchbar";
import CryptoSidebar from "./Sidebar";
import CryptoExchangeComparison from "./CryptoExchangeComparison";
import PieChart from "./Piechart";
import CryptoChart from "./Cryptochart";
import CurrencyDropdown from "./Currencyselector";

function Main() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      <header className="bg-blue-500 relative h-12 text-white text-center font-bold hover:bg-blue-600 transition-colors duration-300">
        <h1 className="py-2">CRYPTO DASHBOARD</h1>
      </header>
      <div className="bg-slate-100 flex flex-col m-4 pt-2 md:m-6 px-2 h-full rounded md:flex-row overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 xl:grid-cols-4 gap-2">
            <div className="md:col-span-3">
              <div className="md:3/4 mx-auto">
                <div className="flex mb-2">
                  <CurrencyDropdown
                    selectedCurrency={selectedCurrency}
                    handleCurrencyChange={handleCurrencyChange}
                  />
                  <Searchbar />
                </div>
                <CryptoChart />
              </div>
              <div className="md:flex mt-2 gap-1">
                <PieChart />
                <CryptoExchangeComparison />
              </div>
            </div>
            <div className="bg-white shadow-md mb-4 rounded-md">
              <CryptoSidebar
                selectedCurrency={selectedCurrency}
                className="md:mt-4"
              />
            </div>
          </div>
          <footer className="bg-blue-500 text-white text-center font-bold hover:bg-blue-600 transition-colors duration-300 py-2">
            <p>&copy; {new Date().getFullYear()} Crypto Dashboard</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Main;
