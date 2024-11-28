import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import "../index.css"
import 'typeface-noto-sans';


const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <>
            <h1 className="text-center font-bold text-[35px] text-[#008080] cursor-pointer pt-10 font-sans">Contact Us</h1>
            <div className="lg:flex block  justify-evenly items-center p-10">
                <div className="form lg:w-[40%] " data-aos="fade-right">
                    <form action="#" method="post" className="mx-auto py-5 text-center">
                        <fieldset className="border border-[#008080] p-5 rounded-xl">
                            <legend className="  p-1 text-left ml-10 text-[30px]  overflow-hidden rounded-lg font-bold text-[#008080] "
                                >Contact Us</legend>

                            <div className="my-10 form-input relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control pl-5 bg-transparent w-[70%] py-2 border-2 border-[#008088] rounded-3xl focus:rounded-3xl focus:border-2 outline-none peer "
                                    required
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 absolute top-2 left-[18%] transition-all duration-200 ease-in-out peer-focus:top-[-25px] peer-valid:top-[-25px] peer-focus:text-[--Sage] peer-focus:text-lg"
                                >
                                    Name
                                </label>
                            </div>

                            <div className="my-10 form-input relative">
                                <input
                                    type="text"
                                    id="E-Mail"
                                    name="E-Mail"
                                    className="form-control pl-5 bg-transparent w-[70%] py-2 border-2 border-[#008080] rounded-3xl focus:border-2 outline-none peer focus:rounded-3xl"
                                    required
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="E-Mail"
                                    className="block text-gray-700 absolute top-2 left-[18%] transition-all duration-200 ease-in-out peer-focus:top-[-25px] peer-valid:top-[-25px] peer-focus:text-[--Sage] peer-focus:text-lg"
                                >
                                    E-Mail
                                </label>
                            </div>

                            <div className="my-10 form-input relative">
                                <textarea
                                    rows="4"
                                    id="Message"
                                    name="Message"
                                    className="form-control pl-5 bg-transparent w-[70%] py-2 border-2 border-[#008080] focus:outline-none peer resize-none rounded-lg"
                                    required
                                    placeholder=" "
                                ></textarea>
                                <label
                                    htmlFor="Message"
                                    className="block text-gray-700 absolute top-2 left-[18%] transition-all duration-200 ease-in-out peer-focus:top-[-25px] peer-valid:top-[-25px] peer-focus:text-[--Sage] peer-focus:text-lg"
                                >
                                    Message
                                </label>
                            </div>

                            <div className="text-center">
                                <a href="/contact" className="">
                                    <button type="button" id="button2" className="p-2 pl-7 inline-block border-2 px-2 rounded-lg overflow-x-hidden bg-[--] border-[#008080] hover:bg-[#008080] hover:text-white">
                                        <span className="text-1">About Us &nbsp;</span>
                                        <i className="fas fa-arrow-right text-[15px]"></i>&nbsp;
                                    </button>
                                </a>
                            </div>
                        </fieldset>
                    </form>

                </div>

                {/* div-2 */}
                <div className="iframe" data-aos="fade-left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13614.292842675177!2d73.07594429999999!3d31.4534145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726221719841!5m2!1sen!2s"
                        className='lg:flex lg:w-[600px] lg:h-[450px] md:hidden rounded-xl'

                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </>
    )
}
export default Contact