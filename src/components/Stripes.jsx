import React from "react";
import Stripe from "./Stripe";
import { firstlogo, secondlogo, thirdlogo } from "../assets";

const Stripes = () => {
  const data = [
    { url: firstlogo, number: 52 },
    { url: secondlogo, number: 2 },
    { url: thirdlogo, number: 12 },
    { url: firstlogo, number: 52 },
    { url: secondlogo, number: 2 },
    { url: thirdlogo, number: 12 },
  ];

  return (
    <div className="flex flex-wrap items-center mt-20 overflow-hidden">
      {data.map((elem, index) => (
        <div
          key={index}
          className={`w-1/3 md:w-1/4 lg:w-1/6 ${
            index >= 3 ? "hidden md:block" : ""
          } ${index >= 4 ? "md:hidden lg:block" : ""}`}
        >
          <Stripe val={elem} />
        </div>
      ))}
    </div>
  );
};

export default Stripes;
