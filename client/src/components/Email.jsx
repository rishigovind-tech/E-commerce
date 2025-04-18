import React from "react";
import banner from "../assets/sale/banner.jpg";

const bannerImg = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "center top 30%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Email = () => {
  return (
    <div className="flex justify-center">
      <div
        className=" container mb-10 bg-gray-100 text-white rounded-3xl  "
        style={bannerImg}
      >
        <div className=" container  py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-black !text-center sm:text-left sm:text-4xl font-semibold">
              Get Notified About New Products
            </h1>
            <div className=" w-full flex justify-center items-center gap-3" >
              <div>
                <input
                  type="text"
                  placeholder="Enter the Email"
                  className="w-[500px] p-3 border border-black text-black rounded-3xl"
                />
              </div>
              <div>
                <button className=" bg-gradient-to-r to-[#F28C82] from-[#6B4E71] px-8 py-3 w-[120px] rounded-full cursor-pointer ">
                  Give It
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
