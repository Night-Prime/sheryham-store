import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Cart from "../components/Cart";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cartReducer";

const Product = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  let product = data?.attributes || [];
  let image =
    process.env.REACT_APP_UPLOAD_URL +
      product?.images?.data[0]?.attributes.url || [];

  // handling RTK operations
  const dispatch = useDispatch();

  // handling quantity
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  // Format the price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(product?.price);

  return (
    <section className="h-screen w-screen">
      <main className="mx-auto w-full h-full flex flex-row">
        <div className="flex-1">
          <main className="flex flex-col h-3/4 w-5/6 mx-auto my-10 justify-between">
            <div>
              <h1 className="text-gray-600 font-light text-sm">
                <Link to="/">Home / </Link>
                <Link to="/products">Products / </Link>
                <Link to="">Product</Link>
              </h1>
            </div>

            <div>
              <h1 className="text-5xl font-semibold mb-6">{product.name}.</h1>
              <h1 className="text-3xl font-semibold">{formattedPrice}</h1>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-semibold ">Description</h1>
                <div className="w-full h-0.5 bg-gray-600 mt-2"></div>
                <p className="mt-2 text-xs">{product.description}.</p>
              </div>

              <div className="flex flex-row justify-between w-1/4">
                <button onClick={decrement}>-</button>
                {quantity}
                <button onClick={increment}>+</button>
              </div>

              <div>
                <button
                  onClick={() =>
                    dispatch(
                      addProductToCart({
                        id: data.id,
                        title: product.name,
                        price: product.price,
                        description: product.description,
                        img: product.images.data[0]?.attributes.url,
                        quantity,
                      })
                    )
                  }
                  className=" w-40 h-10 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600"
                >
                  <span className="font-semibold">Add to Cart</span>
                </button>
              </div>
            </div>
          </main>
        </div>
        <div className="flex-1 border-2 border-x-gray-300">
          <main className="h-full w-full">
            <img className=" h-full w-full object-cover" src={image} alt="" />
          </main>
        </div>
      </main>
      {open && <Cart />}
    </section>
  );
};

export default Product;
