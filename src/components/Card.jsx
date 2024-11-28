import React, { useEffect, useState } from "react";
import { Card } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const card = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-in-out-cubic",
    });
  }, []);
  const [Users, setUsers] = useState([]); // Correct initialization with an empty array

  // const fetchUser = async () => {
  //   try {
  //     const res = await fetch("http://localhost/php_project/project-3/react-app/src/components/api.php");
  //     const data = await res.json();
  //     if (data.length > 0) {
  //       // Correct spelling of "length"
  //       setUsers(data);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <>
      <section id="Shop">
        <div className="font-bold text-[50px] text-center text-gray-900" data-aos="fade-up">
          <h1>
            Blue
            <span className="font-bold text-[#008080] cursor-pointer"> Room's </span>
            Team
          </h1>
        </div>
        <div className="md:flex justify-center sm:block items-center my-10 py-10" data-aos="fade-down">
          {Card.map((card, index) => (
            <div key={card.id} className="w-[80%] flex justify-center ">
              <div className="w-[300px] text-[--]">
                {" "}
                <div className="image hover:-translate-y-12 hover:transition all delay-100">
                  <img
                    className="rounded-xl"
                    src="https://placehold.co/300x400"
                    alt="Card Image"
                  />
                </div>
                <div className="py-2 ">
                  <h1 className="font-bold text-[30px]  text-center">
                    {" "}
                    {card.name}
                  </h1>
                </div>
                <div className="py-2">
                  <p>{card.title}</p>
                </div>
                <a href="#" className="block text-center">
                  <button className="px-3 py-2 border-2 border-zinc-300 mb-5 rounded-xl hover:text-black hover:border-transparent hover:transition ease-in-out delay-100 hover:bg-[#008080]">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))
          }
        </div>
      </section>
    </>
  );
};

export default card;
