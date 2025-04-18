import React from "react";
import BannerImg from "../assets/sale/women4.jpg";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";

const Sale = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className=" container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <div>
            <img
              src={BannerImg}
              className="max-w-[400px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-xl"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl smtext-4xl font-bold ">
              Winter & Summer Sale upto 50% off{" "}
            </h1>
            <p className="text-sm text-black tracking-wide leading-5">
              Get ready to revamp your wardrobe with our biggest seasonal sale!
              Whether you're preparing for the chilly winter months or
              refreshing your summer collection, we’ve got you covered with
              unbeatable discounts of up to 50% off! 
            </p>
            <div className=" flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                <p>Quality Products</p>
            </div>
            <div className=" flex items-center gap-4">
                <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100"/>
                <p>Fast Delivery</p>
            </div>
            <div className=" flex items-center gap-4">
                <RiSecurePaymentFill className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100"/>
                <p>Easy & Secure Payment Method</p>
            </div>
            <div className=" flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100"/>
                <p>Get Offer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
