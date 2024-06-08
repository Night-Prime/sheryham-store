import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/cartReducer";

const Payment = () => {
  // Accessing URL query parameters using useLocation hook
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const dispatch = useDispatch();

  // Extracting individual query parameters
  const status = queryParams.get("status")?.toLocaleUpperCase();
  const tx_ref = queryParams.get("tx_ref");
  const transaction_id = queryParams.get("transaction_id");

  useEffect(() => {
    if (status && status == "SUCCESSFUL") {
      dispatch(resetCart());
    }
  });

  const statusClass =
    status === "SUCCESSFUL" ? "text-green-600" : "text-red-600";

  return (
    <section className="h-max w-screen">
      <main className="h-96 w-full flex flex-col items-center justify-center gap-5">
        <h1 className={`text-5xl font-bold ${statusClass}`}>
          {status} PAYMENT
        </h1>
        <p className="text-xl font-semibold">Reference: {tx_ref}</p>
        {status === "SUCCESSFUL" ? (
          <p className="font-semibold">
            Your Order {transaction_id} is being processed.
          </p>
        ) : (
          <p className="font-semibold">
            Order is not processed. Please try again.
          </p>
        )}
        <div className=" w-full h-max flex flex-col items-center justify-center">
          <Link
            to="/products"
            className="btn bg-red-600 text-white rounded-xl p-2 mt-2 hover:bg-white hover:text-red-600 font-bold"
          >
            Shop More
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Payment;
