import React from "react";
import Logo from "../../public/logo.png";

const Footer = () => {
  return (
    <section className="h-max w-screen bg-black">
      <main className=" h-96 md:h-80 w-11/12 max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-15 mx-auto">
        <div className="flex flex-col py-5 md:py-0 text-white gap-10">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Categories</a>
        </div>

        <div className="hidden md:flex flex-col text-white gap-10">
          <a href="#">Summer Collections</a>
          <a href="#">New Arrivals</a>
          <a href="#">Winter Collections</a>
          <a href="#">Accesories</a>
        </div>

        <div className="flex flex-col h-full  text-white justify-center md:gap-5">
          <h1 className="text-8xl font-500 font-blackletter">Sheryham.</h1>
          <p className="text-sm">
            Established <span className="font-serif">MMXXIV</span>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Footer;
