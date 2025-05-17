import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { checkAuthStatus } from "../feature/authSlice";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux';

const ProductLayout = () => {

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuthStatus());
    }, []);


  
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProductLayout