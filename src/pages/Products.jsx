import React, { useState, useEffect } from "react";
import Card from "../shared/Card";
import useFetch from "../hooks/useFetch";
import Error from "../components/Error";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import Preloader from "../components/Preloader";

const Products = () => {
  // handling filter states & operations
  const [showFilter, setShowFilter] = useState(false);
  const [maxPrice, setMaxPrice] = useState(999_999_999);
  const [collection, setCollection] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [endpoint, setEndpoint] = useState("/products?populate=*");

  // Fetch collections and categories
  const { data: collections } = useFetch("/collections");
  const { data: categories } = useFetch("/categories");

  useEffect(() => {
    let queryParams = `?populate=*`;

    if (maxPrice) {
      queryParams += `&filters[price][$lte]=${maxPrice}`;
    }

    if (collection) {
      queryParams += `&filters[collections][name][$eq]=${collection}`;
    }

    if (category) {
      queryParams += `&filters[categories][name][$eq]=${category}`;
    }

    if (searchTerm) {
      queryParams += `&filters[name][$containsi]=${searchTerm}`;
    }

    setEndpoint(`/products${queryParams}`);
  }, [maxPrice, collection, category, searchTerm]);

  const { data, loading, error } = useFetch(endpoint);
  const products = data ? data.map((item) => item.attributes) : [];
  // console.log(products);

  if (loading) return <Preloader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="h-max w-screen z-0">
      <main className="mx-auto w-full h-full flex flex-col py-2">
        <div className="h-80 w-full flex flex-col justify-center items-center gap-2 relative">
          <h1 className="font-bold text-4xl md:text-8xl">ALL PRODUCTS.</h1>
          <h1 className="font-semibold text-sm">
            Luxury Wears. Creative Accessories
          </h1>
          {/* Conditionally render the Filter tab */}
          {showFilter && (
            <div className="absolute md:bottom-5 right-12 md:w-102 h-11/12 rounded-lg z-10 shadow-lg p-4 bg-white">
              <div className="mx-auto flex flex-col h-full">
                <h1 className="border-b-2 border-grey-400 mb-2">
                  Filter Categories
                </h1>
                <div className="grid grid-cols-2 w-full gap-y-4">
                  <div>
                    <h1>
                      Price{" "}
                      <span className="font-semibold">(NGN {maxPrice})</span>
                    </h1>
                  </div>
                  <div className="flex gap-1 flex-row justify-between items-center md:w-1/2">
                    <span>0</span>
                    <input
                      type="range"
                      min={0}
                      max={1000000}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <span className="hidden md:block">999,999,999</span>
                  </div>

                  <div>
                    <h1>Collections</h1>
                  </div>
                  <div className="flex flex-col">
                    {collections.map((item) => (
                      <div key={item.id}>
                        <input
                          type="radio"
                          name="range"
                          value={item.attributes.name}
                          id={item.attributes.name}
                          onChange={() => setCollection(item.attributes.name)}
                        />
                        <label htmlFor="asc"> {item.attributes.name}</label>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h1>Categories</h1>
                  </div>
                  <div className="flex flex-col">
                    {categories.map((item) => (
                      <div key={item.id}>
                        <input
                          type="radio"
                          name="range"
                          value={item.attributes.name}
                          id={item.attributes.name}
                          onChange={() => setCategory(item.attributes.name)}
                        />
                        <label htmlFor="asc"> {item.attributes.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-16">
          <div className="mx-auto w-11/12 h-max flex flex-row justify-end gap-5">
            <div className="w-full flex flex-row gap-2">
              <input
                className="w-full bg-transparent rounded-lg shadow-md p-2"
                type="text"
                placeholder="Search product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSearchTerm(e.target.value);
                  }
                }}
              />
              {/* <button
                className="flex flex-row items-center gap-1 btn bg-red-600 text-white rounded-lg px-4 hover:bg-white hover:text-red-600"
                onClick={() => setSearchTerm(searchTerm)}
              >
                <span>Search</span>
              </button> */}
            </div>
            <div className="md:block hidden">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex flex-row items-center gap-1 btn bg-red-600 text-white rounded-lg p-2 px-4 hover:bg-white hover:text-red-600"
              >
                <Bars3BottomLeftIcon className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-11/12 h-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2 place-items-center">
            {error ? (
              <Error />
            ) : (
              data.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  link={"/product/" + item.attributes.stockId}
                  title={item.attributes.name}
                  price={item.attributes.price}
                  imageUrl={
                    item.attributes.images &&
                    process.env.REACT_APP_UPLOAD_URL +
                      item.attributes.images.data[0].attributes.url
                  }
                />
              ))
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Products;
