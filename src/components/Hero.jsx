import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const titles = heroElement.querySelectorAll(".hero-title");

    gsap.fromTo(
      titles,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.3,
        ease: "power2.in",
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="h-dvh w-screen z-10 overflow-x-hidden">
      <main className="mx-auto w-full h-full bg-main-img bg-cover bg-no-repeat bg-center lg:bg-top-center">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-black w-3/4 md:w-11/12 h-4/5 md:h-5/6 m-auto md:gap-0 gap-5">
          <div className="md:w-1/2 w-full h-max flex flex-col justify-between md:items-start md:ml-6 text-white">
            <h1 className="hero-title md:text-xl text-6xl font-bold">
              Timeless
            </h1>
            <h1 className="hero-title md:text-8xl font-bold">Luxury</h1>
          </div>
          <div className="md:hidden w-full h-max flex flex-col items-center justify-center">
            <Link
              to="/products"
              className="btn bg-red-600 text-white rounded-xl p-2 mt-2 hover:bg-white hover:text-red-600 font-bold"
            >
              Shop Now
            </Link>
          </div>
          <div className="hidden md:w-1/2 w-full h-max md:flex flex-col justify-between md:items-end md:gap-0 gap-2 text-white">
            <h1 className="hero-title md:text-8xl text-6xl font-bold">
              Elegance
            </h1>
            <h1 className="hero-title text-xl font-bold">Fashion</h1>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
