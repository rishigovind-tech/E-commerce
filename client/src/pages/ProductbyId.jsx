import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/axiosConfig";
import { FaTruck } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../feature/wishlistSlice";
import { addToCart } from "../feature/cartlistSlice";
import toast from "react-hot-toast";

const ProductbyId = () => {
  const [productbyid, setProductbyid] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();
  const handleAddToWishlist = () => {
     toast.success("Added to Wishlist")
    dispatch(addToWishlist(productbyid));
  };

  const handleAddToCart = () => {
    toast.success("Added to Cart")
    dispatch(addToCart(productbyid));
  };

  useEffect(() => {
    const fetchProductsbyId = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        setProductbyid(response.data.product);
        console.log(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsbyId();
  }, [id]);

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 pl-20 pt-20 ">
      <div className="col-span-2 row-span-4 ">
        <img
          src={productbyid.productImg}
          alt={productbyid.productTitle}
          className="w-[600px] h-[800px] "
        />
        <div className=" pt-6 pr-30">
          <div className=" flex gap-3">
            <button
              onClick={handleAddToCart}
              className=" uppercase border border-black bg-[#F28C82] hover:bg-[#F28C99] w-[50%] px-3 py-3 rounded-xl flex justify-center items-center gap-2 text-xl font-semibold"
            >
              <BsHandbagFill />
              Add to Bag{" "}
            </button>
            <button
              onClick={handleAddToWishlist}
              className="uppercase border border-gray-400 hover:border-black w-[50%] px-3 py-3 rounded-xl flex justify-center items-center gap-2 text-xl font-semibold"
            >
              <FaRegHeart /> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-5  col-start-3 flex flex-col gap-5">
        <h2 className="text-3xl font-bold">{productbyid.productTitle}</h2>
        <p className="text-lg font-semibold">{`⭐: ${productbyid.productRating}`}</p>
        <p className="text-lg font-semibold">{` ${productbyid.productColor}`}</p>
        <p className="text-md text-justify font-semibold">
          {productbyid.productDescription}
        </p>
        <p className="text-lg font-semibold">{`Category: ${productbyid.productCategory}`}</p>
        <p className="text-xl font-bold">{`Price: $${productbyid.productPrice}`}</p>
        <hr />
        <div className=" flex gap-3 items-center text-xl">
          <h2 className=" uppercase">Delivery Options</h2>
          <FaTruck />
        </div>
        <div className=" relative w-fit">
          <input
            type="text"
            placeholder="Enter Pincode"
            className=" border border-gray-400 outline-none px-2 py-1 w-xs rounded"
          />
          <button
            type="submit"
            className="absolute right-0.5 top-0  font-medium rounded-xl text-sm px-4 py-2 cursor-pointer text-[#F28C82]"
          >
            Search
          </button>
        </div>
        <span className=" text-xs text-gray-500">
          Please enter PIN code to check delivery time & Pay on Delivery
          Availability
        </span>
        <div className=" flex flex-col">
          <span className="text-gray-500">100% Original Products</span>
          <span className="text-gray-500">
            Pay on delivery might be available
          </span>
          <span className="text-gray-500">
            Easy 7 days returns and exchanges
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center text-xl gap-3">
            <h2 className=" uppercase">best offers</h2>
            <BiSolidOffer />
          </div>
          <ul className="text-gray-500 list-disc pl-4">
            <li>Applicable on: Orders above $50 (only on first purchase)</li>
            <li>Coupon code: SAVINGSPLUS</li>
            <li>Coupon Discount: 20% off</li>
          </ul>
          <span className="text-[#F28C82] font-semibold cursor-pointer">
            View Eligible Products
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center text-xl gap-3">
            <h2 className=" uppercase">
              10% Discount on IDFC FIRST SWYP Credit Card
            </h2>
            <FaCreditCard />
          </div>
          <ul className="text-gray-500 list-disc pl-4">
            <li>Min Spend ₹850, Max Discount ₹350</li>
          </ul>
          <span className="text-[#F28C82] font-semibold cursor-pointer">
            Terms & Condition
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center text-xl gap-3">
            <h2 className=" uppercase">10% Discount on HSBC Credit Cards.</h2>
            <FaCreditCard />
          </div>
          <ul className="text-gray-500 list-disc pl-4">
            <li>Min Spend ₹5000, Max Discount ₹1500.</li>
          </ul>
          <span className="text-[#F28C82] font-semibold cursor-pointer">
            Terms & Condition
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center text-xl gap-3">
            <h2 className=" uppercase">
              7.5% Discount on Myntra Kotak Credit Card.
            </h2>
            <FaCreditCard />
          </div>
          <ul className="text-gray-500 list-disc pl-4">
            <li>Max Discount up to ₹750 on every spends.</li>
          </ul>
          <span className="text-[#F28C82] font-semibold cursor-pointer">
            Terms & Condition
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center text-xl gap-3">
            <h2 className=" uppercase">EMI option available</h2>
          </div>
          <ul className="text-gray-500 list-disc pl-4">
            <li>EMI starting from Rs.47/month</li>
          </ul>
          <span className="text-[#F28C82] font-semibold cursor-pointer">
            View Plan
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductbyId;
