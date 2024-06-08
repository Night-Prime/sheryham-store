import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TrashIcon } from "@heroicons/react/20/solid";
import { removeProductFromCart, resetCart } from "../redux/cartReducer";
import PaymentInput from "./PaymentInput";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  let productPrice;
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    productPrice = Number(total.toFixed(2)); // for payment processing
    return total.toFixed(2);
  };

  // Calculate and format the total price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice());

  return (
    <section className="fixed right-2 top-12 z-40 mt-3 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
      <main className="w-screen md:w-96 h-full p-5 flex flex-col items-start gap-5">
        <div className="border-b-2 w-full py-2">
          <h1 className="text-xl font-semibold">Your Cart</h1>
        </div>
        <div>
          {products.map((item) => (
            <div
              className="flex flex-row gap-5 py-2 items-center justify-between"
              key={item.id}
            >
              <img
                className="w-14 h-14"
                src={process.env.REACT_APP_UPLOAD_URL + item.img}
                alt=""
              />
              <div className="w-full">
                <h1 className="font-semibold">{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="text-sm">
                  {" "}
                  {item.quantity} x N {item.price}
                </div>
              </div>
              <div>
                <TrashIcon
                  className="w-8 h-8 text-red-600 font-bold"
                  onClick={() => dispatch(removeProductFromCart(item.id))}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row gap-5 py-2 items-center justify-between">
          <span className="font-semibold">SUBTOTAL</span>
          <span>{formattedPrice} </span>
        </div>
        <div className="flex flex-row w-full gap-5">
          <button
            className=" w-40 h-10 bg-green-600 rounded-lg text-white hover:bg-white hover:text-green-600"
            onClick={() => setOpen(true)}
            disabled={!products.length}
          >
            <p className="text-sm"> CHECKOUT</p>
          </button>
          <button
            className=" w-40 h-10 bg-red-600 rounded-lg text-white hover:bg-gray-500 hover:text-red-600"
            onClick={() => dispatch(resetCart())}
          >
            <p className="text-sm">RESET CART</p>
          </button>
        </div>
      </main>
      <PaymentInput
        open={open}
        setOpen={setOpen}
        product={products}
        price={productPrice}
      />
    </section>
  );
};

export default Cart;
