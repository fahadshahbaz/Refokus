import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-20 sm:gap-36 my-5 sm:my-10 mr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-20 sm:gap-36 my-5 sm:my-10 mr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
