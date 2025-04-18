import React from "react";
import logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top-rated",
  },
  {
    id: 3,
    name: "Men's Wear",
    link: "/mens-wear",
  },
  {
    id: 4,
    name: "Women's Wear",
    link: "/womens-wear",
  },
  {
    id: 5,
    name: "Kid's Wear",
    link: "/kids-wear",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Product",
    link: "trending-product",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top-rated",
  },
];

const Navbar = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartlistItems = useSelector((state) => state.cartlist.items);

  return (
    <div className=" shadow-md bg-white">
      {/* upper Navbar */}
      <div className="bg-[#FBE4D6] py-2  ">
        <div className="  p-1 px-10 flex justify-between item-center ">
          <div className=" px-14">
            <a href="">
              <img className=" w-30 " src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-[#F28C82] "
                type="text"
                placeholder="Search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-[#6B4E71] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button className="bg-gradient-to-r to-[#F28C82] from-[#6B4E71] transition-all duration-300 ease-in-out text-white py-1 px-4 rounded-full flex items-center gap-5 group">
              <span className="transition-all duration-300 ease-in-out group-hover:block hidden">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer transition-all duration-300 ease-in-out" />
            </button>
            <Link to={"/cart"}>
              <button className="bg-gradient-to-r to-[#F28C82] from-[#6B4E71] transition-all duration-300 ease-in-out text-white py-1 px-4 rounded-full flex items-center gap-5 group">
                <span className="transition-all duration-300 ease-in-out group-hover:block hidden">
                  Bag
                </span>
                <div className="relative">
                  <BsHandbagFill className="text-xl text-white drop-shadow-sm cursor-pointer transition-all duration-300 ease-in-out" />
                  {cartlistItems.length > 0 && (
                    <div className="absolute -top-3 -right-4 bg-[#6B4E71] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartlistItems.length}
                    </div>
                  )}
                </div>
              </button>
            </Link>
            <Link to={"/wishlist"}>
              <button className="relative bg-gradient-to-r to-[#F28C82] from-[#6B4E71] transition-all duration-300 ease-in-out text-white py-1 px-4 rounded-full flex items-center gap-5 group">
                <span className="transition-all duration-300 ease-in-out group-hover:block hidden">
                  Wishlist
                </span>
                <div className="relative">
                  <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer transition-all duration-300 ease-in-out" />
                  {wishlistItems.length > 0 && (
                    <div className="absolute -top-3 -right-4 bg-[#6B4E71] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {wishlistItems.length}
                    </div>
                  )}
                </div>
              </button>
            </Link>
          </div>
          <div className=" flex justify-center items-center">
            <Link to={"/signin"}>
              <button className="relative bg-gradient-to-r to-[#F28C82] from-[#6B4E71] transition-all duration-300 ease-in-out text-white py-4 px-4 rounded-full flex items-center gap-5 group">
                <span className="transition-all duration-300 ease-in-out group-hover:block hidden">
                  Sign in /Sign up
                </span>
                <FaRegUser className="text-xl text-white drop-shadow-sm cursor-pointer transition-all duration-300 ease-in-out" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className=" flex justify-center ">
        <ul className=" flex justify-center items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className=" inline-block px-4 hover:text-[#6B4E71] duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href=""
              className="flex items-center justify-center  gap-[2px] py-2"
            >
              Trending Products
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-[#d5bfda]"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
