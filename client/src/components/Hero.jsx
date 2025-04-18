import React from "react";
import image1 from "../assets/Hero/women.png";
import image2 from "../assets/Hero/shopping.png";
import image3 from "../assets/Hero/sale.png";
import Slider from "react-slick";
import bg from "../assets/bg.jpg"



const Bg= {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "50% 20%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  

const ImageList = [
    {
      id: 1,
      img: image2,
      title: "Up to 50% Off on All Men's Wear",
      description:
        "Enjoy massive discounts on a wide range of men's apparel. Shop now and upgrade your wardrobe with premium styles at unbeatable prices!",
    },
    {
      id: 2,
      img: image1,
      title: "30% Off on All Women's Wear",
      description:
        "Discover stylish and trendy women's fashion at 30% off. Don't miss this exclusive sale—grab your favorite outfits today!",
    },
    {
      id: 3, 
      img: image3,
      title: "Mega Sale: Up to 70% Off on All Products",
      description:
        "Biggest sale of the season! Get up to 70% off on clothing, accessories, and more. Limited-time offer, shop before it's gone!",
    },
  ];
  




const Hero = ({ handleOrderPopup }) => {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    };


  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-[#FBE4D6] flex justify-center items-center " style={Bg}>
      
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings} >
            {ImageList.map((item)=>(
                <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                      {item.title}
                    </h1>
                    <p className="text-sm">
                      {item.description}
                    </p>
                    <div>
                      <button className=" bg-gradient-to-r to-[#F28C82] from-[#6B4E71] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="order-2 sm:order-1 ">
                    <div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120  object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
                
            ))}
          
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
