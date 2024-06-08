import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addProductToFavorite } from "../redux/favReducer";

const Card = ({ id, title, imageUrl, description, link, price }) => {
  const formattedPrice = new Intl.NumberFormat().format(price);
  const dispatch = useDispatch();

  return (
    <section className="h-80 w-64 my-2 flex-shrink-0">
      <main className="h-full w-full flex flex-col items-center justify-between bg-white shadow-lg rounded-sm overflow-hidden">
        <Link to={link} className="w-full h-full">
          <img
            className="w-full h-48 object-cover"
            src={imageUrl}
            alt={title}
          />
        </Link>
        <div className="w-full h-full flex flex-row justify-between p-4">
          <div className="text-left">
            <Link to={link} className="text-sm font-bold">
              {title}
            </Link>
            <p className="text-red-600 text-md font-semibold my-2">
              N{formattedPrice}
            </p>
            {/* <div className="flex flex-row justify-start">
              <StarIcon className="w-4 h-4"></StarIcon>
              <StarIcon className="w-4 h-4"></StarIcon>
              <StarIcon className="w-4 h-4"></StarIcon>
              <StarIcon className="w-4 h-4"></StarIcon>
              <StarIcon className="w-4 h-4"></StarIcon>
            </div> */}
          </div>
          <div>
            <HeartIcon
              className="w-5 mt-2 cursor-pointer"
              onClick={() => {
                dispatch(
                  addProductToFavorite({
                    id: id,
                    title: title,
                    price: price,
                    img: imageUrl,
                    link: link,
                  })
                );
              }}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Card;
