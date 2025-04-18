import React from 'react'
import footerLogo from "../assets/logo.png"
import footer from "../assets/footer.jpg"
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";
  
  const BannerImg = {
    backgroundImage: `url(${footer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  const legalFooter = [
    {
      title: "Privacy Policy",
      link: "/#privacy",
    },
    {
      title: "Terms of Service",
      link: "/#terms",
    },
    {
      title: "Refund Policy",
      link: "/#refund",
    },
    {
      title: "Careers",
      link: "/#careers",
    },
  ];

  const customer = [
    {
      title: "Help Center",
      link: "/#help",
    },
    {
      title: "Track Order",
      link: "/#track-order",
    },
    {
      title: "Shipping Info",
      link: "/#shipping",
    },
    {
      title: "Returns & Exchanges",
      link: "/#returns",
    },
  ];

  const brand = [
    {
      title: "Our Story",
      link: "/#our-story",
    },
    {
      title: "Sustainability",
      link: "/#sustainability",
    },
    {
      title: "Customer Reviews",
      link: "/#reviews",
    },
    {
      title: "Affiliate Program",
      link: "/#affiliate",
    },
  ];
  
  
  const Footer = () => {
    return (
      <div style={BannerImg} className="text-black flex justify-center mt-4 h-[100px] items-center">
        <div className="container">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 p-10 pt-5">
            {/* company details */}
            <div className="py-8 px-4">
              
                <img src={footerLogo} alt="" className=" w-30 "/>
                
              <p>
              © 2025 [Living Crafts]. Elevate your style with trendy, high-quality fashion. Shop with confidence & comfort! 🛍️✨
              </p>
            </div>
  
            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-5 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company & Legal 
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {legalFooter.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Customer Service 
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {customer.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Brand+
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {brand.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              {/* social links */}
  
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Bangalore,Karnadaka</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 8256857456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;