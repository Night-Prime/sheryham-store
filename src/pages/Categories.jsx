import React from "react";
import Slider from "../components/Slider";
import useFetch from "../hooks/useFetch";
import Preloader from "../components/Preloader";
import Error from "../components/Error";

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");

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
          <h1 className="head-title font-bold text-4xl md:text-8xl">
            CATEGORIES.
          </h1>
          <h1 className="head-title font-semibold text-sm">
            Cultural Impact. Inclusive Fashion
          </h1>
        </div>
        <div className="w-full h-full">
          {data.map((item) => (
            <Slider
              key={item.id}
              name="categories"
              sliderName={item?.attributes.name}
              id={item.id}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Categories;
