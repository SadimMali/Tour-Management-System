import Image from "next/image";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center">
      <div className="text-center flex flex-col justify-center items-center">
        <Image
          src="/shopping-cart.svg"
          width={600}
          height={300}
          className="object-cover"
          alt="Empty cart illustration"
        />
        <h1 className="font-semibold text-xl lg:text-2xl mt-4">
          No activities in Cart
        </h1>
        <p className="font-semibold lg:text-lg mt-2">
          Activities you add to your cart stay here for up to 30 minutes.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Find things to do
        </button>
      </div>
    </div>
  );
}
