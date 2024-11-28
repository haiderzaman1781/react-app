import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import 'typeface-noto-sans';
import {
  Header,
  Navbar,
  Swiper,
  Hero,
  Card,
  Registration,
  Blog,
  Pricing,
  Contact,
  Login,
  Footer,
} from "./components";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/swiper" element={<Swiper />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        {/* <Route path="/view" element={<View />}></Route> */}
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* <Route path="/edit/:id" element={<Edit />}></Route> */}
        {/* <Route path="/delete/:id" element={<Delete />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
