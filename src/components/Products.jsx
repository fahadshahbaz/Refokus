import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "/arqitel.mp4";
import ttr from "/ttr.mp4";
import yir from "/yir.mp4";
import yahoo from "/yahoo.mp4";
import rainfall from "/rainfall.mp4";

const videos = [
  { src: arqitel, title: "Arqitel" },
  { src: ttr, title: "TTR" },
  { src: yir, title: "YIR 2022" },
  { src: yahoo, title: "Yahoo!" },
  { src: rainfall, title: "Rainfall" },
];

const products = [
  {
    title: "Arqitel",
    description:
      "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    live: true,
    case: false,
  },
  {
    title: "TTR",
    description:
      "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    live: true,
    case: false,
  },
  {
    title: "YIR 2022",
    description:
      "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    live: true,
    case: false,
  },
  {
    title: "Yahoo!",
    description:
      "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
    live: true,
    case: true,
  },
  {
    title: "Rainfall",
    description:
      "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
    live: true,
    case: true,
  },
];

function Products() {
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-16 sm:mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          // className="window absolute w-full sm:w-[28rem] md:w-[32rem] h-[12rem] sm:h-[16rem] md:h-[23rem] left-1/2 sm:left-[44%] overflow-hidden"
          className="window absolute w-full sm:w-[28rem] md:w-[32rem] h-[23rem] left-1/2 sm:left-[44%] overflow-hidden"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                className="absolute object-cover w-full h-full"
                autoPlay
                muted
                loop
                src={video.src}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
