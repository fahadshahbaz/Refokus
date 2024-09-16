import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import {
  firsthero,
  secondhero,
  thirdhero,
  fourthhero,
  sixthhhero,
  fifthhero,
} from "../assets/";

const Work = () => {
  const [images, setImages] = useState([
    { url: firsthero, top: "50%", left: "50%", isActive: false },
    { url: secondhero, top: "56%", left: "48%", isActive: false },
    { url: thirdhero, top: "45%", left: "56%", isActive: false },
    { url: fourthhero, top: "60%", left: "53%", isActive: false },
    { url: fifthhero, top: "43%", left: "40%", isActive: false },
    { url: sixthhhero, top: "65%", left: "55%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (
      Math.floor(data * 100) //the *100 is to make it percent
    ) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <section className="w-full mt-20">
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
    </section>
  );
};

export default Work;
