import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../config/axiosConfig";
import toast from "react-hot-toast";

const Signup = () => {
  const [formValues, setFormValue] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/register", formValues)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setFormValue({
          fullname: "",
          email: "",
          password: "",
          phone: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setFormValue({
          fullname: "",
          email: "",
          password: "",
          phone: "",
        });
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="flex w-full max-w-sm mx-auto min-h-[500px] rounded-xl shadow-2xl bg-[#292D2F] bg-opacity-50 backdrop-blur-lg lg:max-w-4xl justify-center">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center text-gray-200">
            Create an Account
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-400 lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center uppercase text-gray-400 hover:underline"
            >
              Register with email
            </a>
            <span className="w-1/5 border-b border-gray-400 lg:w-1/4"></span>
          </div>

          <form className="mt-4" onSubmit={handleLogin}>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="signupName"
              >
                Full Name
              </label>
              <input
                id="signupName"
                value={formValues.fullname}
                onChange={handleChange}
                name="fullname"
                className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                required
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="signupEmail"
              >
                Email Address
              </label>
              <input
                value={formValues.email}
                onChange={handleChange}
                name="email"
                id="signupEmail"
                className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                required
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="signupPassword"
              >
                Password
              </label>
              <input
                value={formValues.password}
                onChange={handleChange}
                name="password"
                id="signupPassword"
                className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                required
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="signupMobile"
              >
                Mobile Number
              </label>
              <input
                value={formValues.phone}
                onChange={handleChange}
                name="phone"
                id="signupMobile"
                className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="tel"
                required
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 border border-white text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
            <Link
              to="/signin"
              className="text-xs uppercase text-gray-400 hover:underline"
            >
              or sign in
            </Link>
            <span className="w-1/5 border-b border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
