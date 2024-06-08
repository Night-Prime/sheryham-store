import React from "react";
// import Image from "../public/images/cloth mockup black1 (1).jpg";

const About = () => {
  const Image =
    "https://ik.imagekit.io/0y99xuz0yp/images/cloth%20mockup%201.jpg?updatedAt=1717291766543";
  return (
    <section className="h-max w-screen">
      <main className="mx-auto w-full h-full flex flex-col items-center text-center gap-2 md:gap-6">
        <img className="object-cover w-full h-96" src={Image} alt={Image} />
        <div className="md:w-3/4 h-max mx-auto px-10 flex flex-col gap-10 md:text-center text-justify">
          <div className="py-12">
            <h1 className="font-bold text-4xl md:text-8xl mb-6">Sheryham.</h1>
            <p className="text-lg">
              Sheryham Clothing Brand is dedicated to celebrating the uniqueness
              of mixed-race children through our classic, soft, and elegant
              clothing designs. We aim to bridge cultural gaps and foster
              inclusivity and pride in individuality.
            </p>
          </div>
          <div className="py-12">
            <h2 className="font-bold text-4xl md:mb-0 mb-4 ">The Vision.</h2>
            <p className="text-lg">
              The vision is to become the leading clothing brand for mixed-race
              children, offering high-quality, stylish, and comfortable apparel
              that celebrates diversity and promotes self-confidence.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
