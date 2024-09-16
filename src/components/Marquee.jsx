import React from "react";

const Marquee = ({ imagesurls }) => {
  return (
    <div className="flex w-full gap-20 py-5 overflow-hidden">
      {imagesurls.map((url, index) => (
        <img key={index} src={url} className="w-40 flex-shrink-0" />
      ))}
      {/* {imagesurls.map((url, index) => (
        <img key={index} src={url} className="" />
      ))} */}
    </div>
  );
};

export default Marquee;
