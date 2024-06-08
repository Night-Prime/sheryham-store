import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SubHero = () => {
  const subHeroRef = useRef(null);
  const HomeWears1 =
    "https://ik.imagekit.io/0y99xuz0yp/images/cloth%20mockup%203.jpg?updatedAt=1717291778559";
  const HomeWears2 =
    "https://ik.imagekit.io/0y99xuz0yp/images/cloth%20mockup%204.jpg?updatedAt=1717291748839";

  useEffect(() => {
    const subHeroElement = subHeroRef.current;
    const elements = subHeroElement.querySelectorAll(
      ".subhero-title, .subhero-link"
    );

    gsap.fromTo(
      elements,
      {
        y: 50,
        x: 10,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          // markers: true,
          trigger: subHeroElement,
          start: "top 95%",
          end: "bottom 35%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section ref={subHeroRef} className="w-screen h-screen">
      <main className="h-full w-full flex flex-row z-10 relative">
        <img
          className="w-1/2 object-cover"
          src={HomeWears1}
          loading="lazy"
          alt="wears-image"
        />
        <img
          className="w-1/2 object-cover"
          src={HomeWears2}
          loading="lazy"
          alt="wears-image"
        />
        <div className="z-20 absolute top-12 w-full h-5/6 flex flex-col items-center justify-center gap-5 my-auto">
          <h1 className="subhero-title text-4xl font-bold text-white">
            Shop Now
          </h1>
          <h2 className="subhero-title text-5xl md:text-8xl font-bold text-red-600">
            Sheryham
          </h2>
          <Link
            to="/products"
            className="subhero-link btn bg-white rounded-xl p-2 mt-2 hover:bg-red-600 hover:text-white font-bold"
          >
            New Arrivals
          </Link>
        </div>
      </main>
    </section>
  );
};

export default SubHero;
