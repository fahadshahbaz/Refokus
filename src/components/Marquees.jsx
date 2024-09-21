import React from "react";
import Marquee from "./Marquee";
import {
  basf, bcgp, singularity, intenseeye, flowcode, ypo, lavender, remind,
  weglot, spotify, haufe, yahoo, rainfall, doxel, mural, webflow, rocket, accel
} from "../assets/";

function Marquees() {
  var images = [
    [basf, bcgp, singularity, intenseeye, flowcode, ypo, lavender, remind],
    [weglot, spotify, haufe, yahoo, rainfall, doxel, mural, webflow, rocket, accel],
  ];
  
  return (
    <div className="py-20 mt-20 sm:mt-20 w-full relative overflow-hidden">
      {images.map((item, index) => (
        <Marquee key={index} direction={index === 0 ? "left" : "right"} imagesurls={item} />
      ))}
    </div>
  );
}

export default Marquees;
