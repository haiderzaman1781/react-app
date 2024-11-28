import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import Swiper from "./Swiper";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Blog from "./Blog";
import "./main.js"

const Hero = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <>

      <div className="poster-image">
        <div className="layout"></div>
        <div className={`w-[100%]`}>
          <div className="lg:flex flex-1 justify-evenly realtive z-40	 ">
            <div className="lg:text-start text-center pl-5  lg:pl-10 py-[50px] lg:pt-[100px]   bg-transparent flex lg:w-[50%] w-full"
              data-aos="fade-down">
              <div className="w-full lg:w-[70%]">
                <p className="text-gray-800">Happy Tuesday</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mb-4">Right here for you. Your
                  accounting pain
                  relief.
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-8 text-[--Deepcharcoal] ">Got better things to do than stress out about
                  accounting? We
                  hope so. We're Beany, and we're right here beside you to
                  share the weight and take the hassle out of it.
                </p>
                <div className="grid lg:grid-cols-2  gap-3 justify-center">
                  <NavLink to="/Contact" id="button"
                    className="overflow-hidden hover:text-[--Ivory] py-2 px-10 shadow-xl rounded-full text-[--DeepCharcoal] hover:bg-[--Teal] bg-[--silver]  transition ease-in-out delay-100">
                    <i className="fa-solid fa-arrow-right"></i> Contact US
                  </NavLink>
                  <NavLink to="/registration" id="button2"
                    className="overflow-hidden text-[--Ivory] py-2 px-10 shadow-xl rounded-full hover:text-[--DeepCharcoal] bg-[--Teal]  hover:bg-[--silver] transition ease-in-out delay-100">
                    Register <i className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>

                <div className="start pl-5 pt-5">
                  <i className="fa-solid fa-star text-[#FFD43B]"></i>
                  <i className="fa-solid fa-star text-[#FFD43B]"></i>
                  <i className="fa-solid fa-star text-[#FFD43B]"></i>
                  <i className="fa-solid fa-star text-[#FFD43B]"></i>
                  <i className="fa-solid fa-star inline"></i>
                  <p className="inline">
                    Rated 4.0 on google reviews
                  </p>
                </div>
                <div className="integrated mt-5">
                  <p className="font-bold">integrated with:</p>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="image flex  justify-center py-5" data-aos="fade-right">
              <img
                className="rounded-2xl"
                src="https://placehold.co/300x400"
                alt="Card Image"
              />
            </div>
          </div>
          </div>
      </div>

      <Blog />
      <br />
      <br />
      <Swiper />
      <br />
      <br />
      <Card />
      <br />
      <br />
      <Pricing />
      <br />
      <br />
      <Contact />
    </>
  );
};

export default Hero;
