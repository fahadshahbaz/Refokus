import React from "react";
import { logo } from "../assets/";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 px-6 mx-auto flex items-center justify-between border-b-2 border-zinc-700">
      <div className="nleft flex items-center">
      <img src={logo} alt="Refokus logo" />
      <div className="hidden links md:flex gap-14 ml-20 text-white">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-[2px] h-6 bg-zinc-700"></span>
          ) : (
            <a
              key={index}
              className="font-regular text-sm flex items-center gap-2"
              href="#"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.55em #00FF19" }}
                  className="inline-block w-[5px] h-[5px] rounded-full bg-green-600"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
