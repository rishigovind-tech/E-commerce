import React, { useState } from "react";
import { BsPersonCircle, BsCart3, BsPencil } from "react-icons/bs";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dummyOrders = [
    {
      id: "ORD001",
      date: "2024-01-15",
      amount: 299.99,
      status: "Delivered",
      tracking: "TRK123456"
    },
    {
      id: "ORD002",
      date: "2024-01-10",
      amount: 159.99,
      status: "Shipped",
      tracking: "TRK789012"
    }
  ];

  const navigationItems = [
    { id: "profile", label: "Personal Profile", icon: BsPersonCircle },
    { id: "orders", label: "Order History", icon: BsCart3 }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="w-50 h-50 rounded-full object-cover"
                />
                <button className="absolute bottom-1 right-5 bg-blue-600 p-2 rounded-full text-white">
                  <BsPencil />
                </button>
              </div>
              <div>
                <h2 className="text-4xl font-bold">John Doe</h2>
                <p className="text-2xl text-black">john.doe@example.com</p>
              </div>
            </div>
            <div className="bg-white min-h-full p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold mb-4">Personal Details</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xl font-medium text-black">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none h-[30px] px-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter Your Name"
                      
                      
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none h-[30px] px-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter Your Email"
                      
                     
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="text-3xl font-semibold mb-4">Address</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xl font-medium text-gray-700">Street Address</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none h-[30px] px-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"
                        
                       
                      />
                    </div>
                    <div>
                      <label className="block text-xl font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none h-[30px] px-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="City"
                        
                       
                      />
                    </div>
                    <div>
                      <label className="block text-xl font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none h-[30px] px-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="State"
                                         
                      />
                    </div>
                    <div>
                      <label className="block text-xl font-medium text-gray-700">Pincode</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-black shadow-sm outline-none h-[30px] px-3 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Pincode"
                        
                       
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-6">Order History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dummyOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 text-2xl whitespace-nowrap">{order.id}</td>
                      <td className="px-6 py-4 text-2xl whitespace-nowrap">{order.date}</td>
                      <td className="px-6 py-4 text-2xl whitespace-nowrap">${order.amount}</td>
                      <td className="px-6 py-4 text-2xl whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-2xl ${order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-800">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-25 w-25 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Logo"
                />
                <span className="ml-2 text-xl font-semibold">User Profile</span>
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-1 bg-white">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center w-full px-2 py-2 text-2xl font-medium rounded-md ${activeSection === item.id ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <main className="py-6 px-4 sm:px-6 lg:px-8">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;