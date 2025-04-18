import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Landing from "./components/Landing";
import Allproducts from "./pages/Allproducts";
import ProductbyId from "./pages/ProductbyId";
import ProductLayout from "./layouts/ProductLayout";
import WishlistPage from "./pages/WishlistPage";
import Cartlist from "./pages/Cartlist";
import UserPro from "./components/Userpro";

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        
        <Route element={<ProductLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/all-Product" element={<Allproducts />} />
          <Route path="/all-Product/:id" element={<ProductbyId />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<Cartlist/>} />


        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <UserPro/> */}
    </div>
  );
};

export default App;
