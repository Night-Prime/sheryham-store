import React from "react";
import {
  TruckIcon,
  GiftIcon,
  ArrowPathRoundedSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Info = () => {
  return (
    <section className="h-max w-screen bg-gray-200">
      <main className="h-screen md:h-40 w-2/3 md:w-11/12 flex flex-col md:flex-row items-center md:justify-center md:gap-0 gap-6 mx-auto">
        <div className="w-full md:w-1/4 flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="w-12 object-contain">
            <TruckIcon />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-bold text-md md:text-xl">Fast shipping</h1>
            <p className="md:text-xs text-sm">For orders above N50,000</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="w-12 object-contain">
            <ArrowPathRoundedSquareIcon />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-bold text-md md:text-xl">Free Returns</h1>
            <p className="md:text-xs">Within 30days</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="w-12 object-contain">
            <GiftIcon />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-bold text-md md:text-xl">20% off Items</h1>
            <p className="md:text-xs">On first purchase</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="w-12 object-contain">
            <UserGroupIcon />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-bold text-md md:text-xl">
              Seamless Experience
            </h1>
            <p className="md:text-xs">Smooth & easy purchase for you</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Info;
