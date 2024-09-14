import React from "react";
import {
  firsthero,
  secondhero,
  thirdhero,
  fourthhero,
  sixthhhero,
  fifthhero,
} from "../assets/";

const Work = () => {
  const images = [
    { url: firsthero, top: "50%", left: "50%", isActive: false },
    { url: secondhero, top: "56%", left: "48%", isActive: false },
    { url: thirdhero, top: "45%", left: "56%", isActive: false },
    { url: fourthhero, top: "60%", left: "53%", isActive: false },
    { url: fifthhero, top: "43%", left: "40%", isActive: false },
    { url: sixthhhero, top: "65%", left: "55%", isActive: true },
  ];

  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[37vw]  text-center leading-none font-medium select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt="work_images"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
