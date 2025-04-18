import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../feature/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { addToCartlist } from "../feature/cartlistSlice";


const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (productbyid) => {
    dispatch(addToCartlist(productbyid));
  };

  return (
    <div className="min-h-screen">
      <div className="py-10">
        <div className=" flex justify-center items-center ">
          <h2 className=" text-6xl">Your Wishlist</h2>
        </div>
      </div>
      {wishlistItems.length === 0 ? (
        <p className=" text-4xl flex justify-center items-center ">
          No items in Wishlist.
        </p>
      ) : (
        <div className=" flex px-40 gap-6">
          {wishlistItems.map((product, index) => (
            <div
              key={product.productID}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full max-w-xs flex flex-col items-center"
             
            >
              <div
                className="cursor-pointer w-full "
                onClick={() => navigate(`/all-Product/${product.productID}`)}
              >
                <img
                  src={product.productImg}
                  alt={product.productTitle}
                  className="w-full object-cover rounded-xl"
                />
                <h3 className="text-xl font-semibold mt-3 text-center">
                  {product.productTitle}
                </h3>
                <p className="text-sm text-gray-600 mt-1 text-center">
                  ⭐ {product.productRating}
                </p>
                <p className="text-sm text-gray-600 text-center">
                  {product.productColor}
                </p>
                <p className="text-lg font-bold text-[#F28C82] mt-1 text-center">
                  ${product.productPrice}
                </p>
              </div>

              <div className=" flex gap-3 justify-center items-center">
                <button
                  onClick={()=>handleAddToCart(product)}
                  className="mt-4 text-sm font-medium text-white bg-[#F28C82] hover:bg-[#f26d63] px-4 py-2 rounded-full"
                >
                  Add to Bag
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeFromWishlist(product.productID));
                  }}
                  className="mt-4 text-sm font-medium text-white bg-[#F28C82] hover:bg-[#f26d63] px-4 py-2 rounded-full"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
