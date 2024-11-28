import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="py-2 bg-[--Sage] text-center text-sm sm:text-base">
      <div className="nolink">
        📣 Learn more about <span className="text-[--darkgreen]">Blue Room.</span>
        <a href="https://wa.me/923157837844" className="underline">
          Book a call with a problem solver today
        </a>
      </div>
    </div>
  );
}

export default Header