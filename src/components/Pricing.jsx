import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"

import { useState, useEffect } from 'react';

const Pricing = () => {
    const [selectedPackage, setSelectedPackage] = useState({
        name: 'Form',
        description: 'Up to 250k Income',
        price: '145',
    });

    const [showGST, setShowGST] = useState(false);

    const packages = [
        {
            name: 'Form',
            description: 'Up to 250k Income',
            price: '145',
        },
        {
            name: 'Flow',
            description: '250k to 750k Income',
            price: '185',
        },
        {
            name: 'Flex',
            description: '750k to 2m Income',
            price: '225',
        },
        {
            name: 'Custom Plan',
            description: 'Over 2m Income',
            price: '325',
        },
    ];

    const features = [
        'Year-end tax and compliance',
        'Easy online dashboard',
        'Unlimited chat and support',
        'Fixed fees, no surprises'
    ];

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-in-out-cubic",
        });
    }, []);

    useEffect(() => {
        // Set the selected package to the first one on initial load
        setSelectedPackage(packages[1]);
    }, []);

    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className=" text-center" data-aos="fade-down">
                <h1 className="text-3xl font-bold mb-4">Beany Pricing Guide</h1>
                <p className="mb-8">
                    Use the pricing calculator below to get a quick quote and sign up today to schedule a complimentary Beany
                    consultation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {/* Package side */}
                <div className='shadow-xl rounded-xl px-5 py-10 md:px-10 md:py-[50px] bg-[--Sage]' data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-2">1. Select your package</h2>
                    <div className="mb-4">
                        {packages.map((pkg) => (
                            <div key={pkg.name} className="flex items-center mb-2 rounded-xl pl-4 py-5 shadow-lg border-2 border-transparent hover:border-gray-300 cursor-pointer">
                                <input
                                    type="radio"
                                    id={pkg.name}
                                    name="package"
                                    value={pkg.name}
                                    onChange={() => setSelectedPackage(pkg)}
                                />
                                <label
                                    htmlFor={pkg.name}
                                    className="ml-2 text-lg cursor-pointer"
                                >
                                    {pkg.name} - {pkg.description} - ${pkg.price}/mo
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4 border-2 border-transparent hover:border-gray-300 px-2 py-1 rounded-lg">
                        <label htmlFor="gst" className="ml-2 text-lg cursor-pointer">
                            <h2 className="text-xl font-bold mb-2">
                                <div className="flex justify-between">
                                    <div className='flex items-center justify-evenly gap-3 py-1'>
                                        <input
                                            className="form-checkbox rounded-full text-blue-600 h-5 w-5"
                                            type="checkbox"
                                            id="gst"
                                            name="gst"
                                            onChange={() => setShowGST(!showGST)}
                                        />
                                        <h5 className='mb-0'>
                                            Prepare GST (optional)
                                        </h5>
                                    </div>
                                    <p className='mb-2'>
                                        $57.50+
                                    </p>
                                </div>
                            </h2>
                            <p>
                                We prepare your GST returns ready for you to review and pay. We also remind you of when and how much to pay, and even send an alert if you forget! Requires Xero.
                            </p>
                            <a href="" className="text-[--Teal] hover:underline">Learn more&gt;</a>
                        </label>
                    </div>
                </div>

                {/* right side */}
                <div className="shadow-xl px-5 py-10 md:px-10 md:py-[50px] rounded-lg bg-[--Sage]" data-aos="fade-up">
                    <div className="mb-4">
                        {selectedPackage && (
                            <div>
                                <div className="border-b-2 border-b-gray-500 px-[85px]  mb-5">

                                    <div className="text-center text-5xl"><b>${selectedPackage.price}/mo</b> </div>.

                                    <p className='mb-2'>
                                        Core packages are based on 12 monthly payments.
                                    </p>
                                </div>

                                <h2 className="text-xl font-bold mb-2">Quote</h2>
                                <div className="flex justify-between">
                                    <h5 className='mb-2'>
                                        {selectedPackage.name}
                                    </h5>
                                    <p className='mb-2'>
                                        ${selectedPackage.price}/mo.
                                    </p>
                                </div>
                                {showGST && (
                                    <div className="flex justify-between border-b-2 border-b-gray-500 pb-10">

                                        <h5>
                                            With GST{' '}

                                        </h5>
                                        <h5>
                                            ${(parseFloat(selectedPackage.price) + 57.50).toFixed(1)}
                                        </h5>

                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="last">
                        <h2 className="text-xl font-bold mb-2">What's Included</h2>
                        <ul className="list-disc pl-4 mb-4">
                            {features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <div className="text-center mt-10">
                            <button className="shadow-xl font-bold py-2 px-10 w-56 border-2 border-black rounded-2xl hover:bg-[--Teal] hover:text-white hover:border-transparent transition-colors delay-75">
                                Rgister
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;