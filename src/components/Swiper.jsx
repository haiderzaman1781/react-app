import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import { Slider } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); // Create a ref for Swiper

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 300,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <section id="product" className="pb-5">
        <h1
          className="font-bold text-gray-900 text-center text-[50px] mb-5"
          data-aos="fade-down"
        >
          Our{" "}
        <span className="text-[#008080] transition duration-300">
            Service's
          </span>
        </h1>

        <Swiper
          ref={swiperRef} // Attach the ref to the Swiper
          data-aos="fade-up"
          className="w-full max-w-screen-lg mx-auto"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={handleSlideChange}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        >
          {Slider.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative overflow-hidden ">
              <div className="rounded-xl overflow-hidden shadow-lg mx-auto w-[80%]">
                {/* Image with hover effect */}
                <img
                  src={slide.image || "https://placehold.co/300x400"}
                  alt={slide.title}
                  className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-105"
                />

                <div className="p-4 bg-white">
                  <h2 className="text-xl font-bold mb-2 text-gray-900 text-center">{slide.title}</h2>
                  <p className="text-gray-700 mb-4">{slide.para}</p>

                  {/* Button linking to Billing.jsx */}
                  <div className="text-center">
                    <a href="./Billing.jsx" className="inline-block">
                      <button className="px-4 py-2 bg-[--Teal] text-white rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                        Avail Service
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

        {/* Custom Navigation Bar */}
        <div className="text-center my-5">
          <button
            onClick={goToPrevSlide}
            className="px-4 py-2 mr-10 bg-gray-300 rounded-xl hover:bg-gray-400 transition duration-300"
          >
            Prev
          </button>

          <button
            onClick={goToNextSlide}
            className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition duration-300"
          >
            Next
          </button>
          </div>
        <div className="flex justify-center mt-4">
          <div className="relative w-full max-w-screen-lg mx-4">
            <div className="flex justify-between">
              {Slider.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1 cursor-pointer transition-all duration-300`}
                  style={{ width: `${100 / Slider.length}%` }}
                  onClick={() => {
                    setActiveIndex(index); // Update active index
                    swiperRef.current.swiper.slideTo(index); // Slide to the clicked index
                  }}
                />
              ))}
            </div>

        </div>
      </div>
    </section>
  );
}