import React from "react";
import useFetch from "../hooks/useFetch";
import Slider from "../components/Slider";
import Error from "../components/Error";
import Preloader from "../components/Preloader";

const Collections = () => {
  const { data, loading, error } = useFetch("/collections?populate=*");

  if (loading)
    return (
      <div>
        <Preloader />
      </div>
    );
  if (error) return <Error />;

  return (
    <section className="h-max w-screen">
      <main className="mx-auto w-full h-full flex flex-col py-2">
        <div className="h-80 w-full flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold text-4xl md:text-8xl">COLLECTIONS.</h1>
          <h1 className="font-semibold text-sm">
            Creative Clothing. Timeless Style
          </h1>
        </div>
        <div className="w-full h-full">
          {data.map((item) => (
            <Slider
              key={item.id}
              name="collections"
              sliderName={item?.attributes.name}
              id={item.id}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Collections;
