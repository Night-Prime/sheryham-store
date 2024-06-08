import React from "react";
import Card from "../shared/Card";
import Error from "./Error";
import useFetch from "../hooks/useFetch";
import Preloader from "./Preloader";

const Slider = ({ name, sliderName, id }) => {
  const { data, loading, error } = useFetch(
    `/${name}/${id}?populate[products][populate]=*`
  );

  if (loading)
    return (
      <div>
        <Preloader />
      </div>
    );
  if (error) return <Error />;

  let products = data?.attributes?.products?.data || [];
  products.map((item) => {
    console.log(item);
  });

  return (
    <section className="h-max w-screen relative">
      <main className="h-full w-11/12 mx-auto py-12 relative overflow-hidden">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{sliderName}</h1>
        </div>
        <div className="relative flex flex-row gap-4 overflow-x-auto rounded-lg h-full py-10">
          {products.map((item) => (
            <Card
              key={item.id}
              title={item?.attributes.name}
              price={item?.attributes.price}
              imageUrl={
                item?.attributes.images?.data &&
                item?.attributes.images?.data?.length > 0
                  ? process.env.REACT_APP_UPLOAD_URL +
                    item.attributes.images.data[0].attributes.url
                  : "default-image-url"
              }
              link={"/product/" + item?.attributes.stockId}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Slider;
