import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"

const Login = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-in-out-cubic",
        });
    }, []);
  return (
      <>
       
          <div className="min-h-screen flex items-center justify-center w-full bg-[--Darkgreen]">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md" >
                  <div data-aos="fade-up">
                  <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
                  <form action="#">
                      <div className="mb-4">
                          <label for="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                          <input type="email" id="email" className=" shadow-sm rounded-md w-full px-3 py-2 bg-[--Sage] border  border-gray-300 focus:outline-none focus:ring-transparent" placeholder="your@email.com" required/>
                      </div>
                      <div className="mb-4">
                          <label for="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                          <input type="password" id="password" className=" shadow-sm rounded-md w-full px-3 py-2 bg-[--Sage] border  border-gray-300 focus:outline-none focus:ring-transparent" placeholder="Enter your password" required/>
                              <a href="#"
                                  className="text-xs text-gray-600 hover:text-[--Teal]">Forgot
                                  Password?</a>
                      </div>
                      <button onclick="alert('hello')" type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[--Teal] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                      <div className="text-center py-2 ">
                         
                          <Link to="/registration"
                                  className="text-xs text-gray-600 hover:text-[--Teal]">Create
                              Account</Link>
                      </div>
                      </form>
                  </div>
          </div>
      </div>
      </>
  )
}

export default Login