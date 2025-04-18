import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axiosConfig";
import { Link, useNavigate } from "react-router-dom";


const gridPositions = [
  "row-span-4 col-start-1 row-start-1",
  "row-span-4 col-start-2 row-start-1",
  "row-span-4 col-start-3 row-start-1",
  "row-span-4 col-start-4 row-start-1",
  "row-span-4 col-start-5 row-start-1",
];

const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const navigate=useNavigate()

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
    <div className="mt-14 mb-12 flex justify-center items-center">
      <div className="container ">
        <div className="  text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold ">Explore Our Products</h1>
          <p className="text-xs text-gray-400">
            Discover a diverse range of high-quality products tailored to your
            needs. Whether you're looking for the latest fashion trends,
            everyday essentials, or exclusive deals, we have something for
            everyone. Shop with confidence and enjoy unbeatable discounts,
            premium quality, and a seamless shopping experience. Start exploring
            now and find the perfect products for you! 🚀🛍️
          </p>
        </div>

        <div className="grid grid-cols-5 grid-rows-4 gap-4    p-5">

          {productsData.slice(0, 5).map((product, index) => (
  
            <div
              key={product.productID}
              className={`${gridPositions[index]} bg-[#FBE4D6] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center  transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
             onClick={()=>navigate(`/all-Product/${product.productID}`)}
            >
              <img
                src={product.productImg}
                alt={product.productTitle}
                className="w-fit h-fit object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">
                {product.productTitle}
              </h3>
              <p className="text-black text-sm">⭐ {product.productRating}</p>
              <p className="text-sm text-black">{product.productColor}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mr-2 py-3 pr-4 w-full">
          <Link to={"/all-Product"}>
            <button className=" bg-gradient-to-r to-[#F28C82] from-[#6B4E71] px-8 py-3 rounded-full cursor-pointer ">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
