import React from "react";
import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { paymentRequest } from "../helper/makeRequest";

const PaymentInput = ({ open, setOpen, product, price }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = name && email && address && phone;
    setIsFormValid(isValid);
  }, [name, email, address, phone]);

  const handlePayment = async () => {
    let payment = {
      tx_ref: `tx-${new Date().getTime()}`,
      amount: price,
      meta: {
        _id: `CUS-${Math.floor(Math.random() * 1000000)}`,
      },
      redirect_url: `${process.env.TEST_FRONTEND}/payment`,
      customer: {
        email: email,
        phonenumber: phone,
        name: name,
        address: address,
      },
      product: product,
    };
    console.log(payment);
    // setOpen(false);
    try {
      const result = await paymentRequest.post(
        "/orders/initiate-payment",
        payment
      );
      if (result.data.status == "success") {
        console.log(result.data.data.link);
        const paymentLink = result.data.data.link;
        window.location.href = paymentLink;
      }
      console.log("Result:", result.data);
    } catch (err) {
      if (err.response) {
        console.log("Error response:", err.response.data);
      } else if (err.request) {
        console.log("Error request:", err.request);
      } else {
        console.log("Error message:", err.message);
      }
      console.log("Error config:", err.config);
    }
  };

  return (
    <Transition show={open}>
      <Dialog className="relative z-40" onClose={() => setOpen(false)}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400 bg-opacity-65 backdrop-blur-lg transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all h-auto md:h-96 w-96 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 h-full">
                  <div className="sm:flex sm:items-start h-full">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-amber-600"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-3 w-full flex flex-col justify-between h-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Fill in these information to complete order.
                      </DialogTitle>
                      <div className="mt-2 flex flex-col gap-2">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Delivery Address"
                          className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="px-4 py-3 flex md:flex-row-reverse flex-col-reverse md:px-6 gap-2 ">
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          data-autofocus
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                            isFormValid
                              ? "bg-green-600 hover:bg-green-500"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          onClick={handlePayment}
                          disabled={!isFormValid}
                        >
                          Make Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentInput;
