import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axiosConfig";

import bg from "../assets/bgsearch.jpg";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const gridPositions = [
  "row-span-4 col-start-1 row-start-1",
  "row-span-4 col-start-2 row-start-1",
  "row-span-4 col-start-3 row-start-1",
  "row-span-4 col-start-4 row-start-1",
  "row-span-4 col-start-5 row-start-1",
];

const Allproducts = () => {
  const [search, setSearch] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const category = ["all", ...categories];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProductsData(response.data.product);
        console.log(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <div>
          <img
            className="w-full h-[250px] md:h-[300px] object-cover"
            src={bg}
            alt="Background"
          />
        </div>

        <div className=" mx-4 sm:mx-10 md:mx-[20%] mt-8 rounded-xl flex justify-center py-8 md:py-16 bg-gray-100 shadow-2xl relative top-[-120px] z-10 ">
          {/* <img className=" absolute top-0 left-0 w-full h-full object-cover rounded-xl" src={bgs} alt="" /> */}
          <form
            className="w-full max-w-4xl px-4 flex items-center gap-4"
            onSubmit={handleSubmit}
          >
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-black">
                <IoMdSearch size={20} />
              </div>

              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white placeholder:text-xs sm:placeholder:text-base placeholder:truncate"
                aria-label="Search Name or Place"
                required
                placeholder="Search Product/Color"
                onChange={(e) => [setSearch(e.target.value)]}
                value={search}
              />

              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-gradient-to-r to-[#F28C82] from-[#6B4E71] focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>

          <select
            className="border border-black px-3 py-1 rounded-xl"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {category.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className=" px-24">
        <div className="grid grid-cols-5 grid-rows-3 gap-4 p-5">
          {productsData
            .filter((item) => {
              const matchesSearch =
                search === "" ||
                item.productTitle
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.productColor.toLowerCase().includes(search.toLowerCase());
              const matchesCategory =
                selectedCategory === "all" ||
                item.productCategory === selectedCategory;

              return matchesSearch && matchesCategory;
            })
            .map((product, index) => (
              <Link to={`/all-Product/${product.productID}`} key={product.productID}><div
                key={product.productID}
                className={`${gridPositions[index]} bg-[#FBE4D6] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center  transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                
                  <img
                    src={product.productImg}
                    alt={product.productTitle}
                    className="w-fit h-fit object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {product.productTitle}
                  </h3>
                  <p className="text-black text-sm">
                    ⭐ {product.productRating}
                  </p>
                  <p className="text-sm text-black">{product.productColor}</p>
                
              </div></Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
