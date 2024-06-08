import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromFavorite } from "../redux/favReducer";

const Favourite = () => {
  const products = useSelector((state) => state.fav.products);
  const dispatch = useDispatch();

  return (
    <section className="fixed right-2 top-12 z-40 mt-3 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
      <main className="w-screen md:w-96 h-full p-5 flex flex-col items-start gap-5">
        <div className="border-b-2 w-full py-2">
          <h1 className="text-xl font-semibold">Your Favorites</h1>
        </div>
        <div>
          {products.map((item) => (
            <div
              className="flex flex-row gap-5 py-2 items-center justify-between"
              key={item.title}
            >
              <img src={item.img} alt={item.title} className="w-8 h-8" />
              <Link to={item.link} className="w-full">
                <h1 className="font-semibold">{item.title}</h1>
              </Link>
              <div>
                <TrashIcon
                  className="w-6 text-red-600 font-bold"
                  onClick={() => dispatch(removeProductFromFavorite(item.id))}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Favourite;
