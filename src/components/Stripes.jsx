import React from "react";
import Stripe from "./Stripe";
import { firstlogo, secondlogo, thirdlogo } from "../assets";


const Stripes = () => {
  var data = [
    {
      url: firstlogo,
      number: 52,
    },
    {
      url: secondlogo,
      number: 2,
    },
    {
      url: thirdlogo,
      number: 12,
    },
    {
      url: firstlogo,
      number: 52,
    },
    {
      url: secondlogo,
      number: 2,
    },
    {
      url: thirdlogo,
      number: 12,
    },
  ];
  return (
    <div className="flex items-center mt-20 overflow-hidden">
      {data.map((elem, index) => (
        <Stripe
          key={index}
          // direction={index === 0 ? "left" : "right"}
          val={elem}
        />
      ))}
    </div>
  );
};

export default Stripes;
