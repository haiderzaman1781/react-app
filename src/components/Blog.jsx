import React, { useState } from 'react'; 
import { NavLink } from "react-router-dom";

import "../index.css"

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        {
            title: "All your annual compliance sorted",
            details: [
                "Reviewing your Xero file at year-end",
                "Year-end tax adjustments",
                "Completing annual financial statements",
                "Completing and filing your entity income tax returns plus returns for two shareholders",
                "Completing and filing your Companies Office annual return",
                "Preparing your minutes and resolutions"
            ]
        },
        {
            title: "Seriously reduce your taxes",
            details: [
                "Annual review of your tax structure",
                "Tax minimiser - our painless online questionnaire",
                "A Beany accountant working on reducing your tax",
                "Thinking about provisional tax as you go",
                "Organising tax refunds/transfers",
                "Ensuring the IRD assesses your tax correctly"
            ]
        },
        {
            title: "Goal setting and advice",
            details: [
                "Set your goals",
                "Link to budget (if you've got one)",
                "Link Xero to Beany",
                "Year-end call where we update your goals for the following year"
            ]
        },
        {
            title: "Tons of proactive info and alerts",
            details: [
                "Alerts on unpaid tax, upcoming tax and unfiled returns",
                "Beany will show you if you're not tracking to budget",
                "Essential tips and knowledge made for your business type and stage"
            ]
        },
        {
            title: "Unlimited support and chats",
            details: [
                "Speak to a human through our helpdesk",
                "Access to your NZ-based accountant"
            ]
        }
    ];

    const toggleDetails = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            
            <div className="flex flex-col lg:flex-row justify-between px-10 my-10 bg-[--Sage] py-10">
                <div className="image flex justify-center py-5 lg:h-[100%] pt-[100px] lg:px-[100px]" data-aos="fade-right">
                    <img
                        className="rounded-xl"
                        src="https://placehold.co/300x400"
                        alt="Card Image"
                    />
                </div>
                <div className="w-full lg:w-[50%] pl-10">
                    <div className="w-full" data-aos="fade-up">
                        <p className="text-[--DeepCharcoal]">FIXED MONTHLY FEES, NO SURPRISES</p>
                        <h1 className="text-[24px] md:text-[30px] text-[--DeepCharcoal] font-bold mb-4">
                            Get your hands on all this for one simple monthly payment
                        </h1>
                        <ul className="mx-4">
                            {items.map((item, index) => (
                                <li key={index} className="py-3 text-[18px] md:text-[22px]">
                                    <div
                                        className="flex justify-between w-full md:w-[70%] click cursor-pointer"
                                        onClick={() => toggleDetails(index)}
                                    >
                                        <button
                                            className={`transition-colors duration-300 ${activeIndex === index ? 'text-[--Teal]' : 'text-[--DeepCharcoal]'}`}
                                        >
                                            {item.title}
                                        </button>
                                        <i className={`icon fa-solid fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                    </div>
                                    <div className="flex justify-between w-full md:w-[80%] border-b-2">
                                        <ol className={`hidelist list-disc list-inside space-y-2 text-lg py-2 transition-all duration-100 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                            {item.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="grid lg:grid-cols-3 gap-3 justify-center">
                            <NavLink to="/registration" id="button" className="overflow-hiddenx py-2 px-10 border-2 border-[--Teal] shadow-2xl hover:bg-transparent hover:text-[--DeepCharcol] hover:border-transparent rounded-full text-white bg-[--Teal] transition ease-in-out delay-100">
                                <i className="fa-solid fa -arrow-right"></i> Register
                            </NavLink>
                            <NavLink to="/pricing" id="button2" className="overflow-hidden bg-[--platinum] shadow-2xl py-2 px-10 border-2 rounded-full text-[--DeepCharcoal] transition ease-in-out delay-100">
                                <span className="">pricing</span> <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Blog;