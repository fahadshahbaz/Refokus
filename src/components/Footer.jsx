import React from "react";

function Footer() {
  return (
    // <div className="px-4 sm:px-6 lg:px-8 py-10">
    <div className="max-w-screen-xl mx-auto px-2 sm:px-4 gap-4 space-y-5 py-5 sm:py-10 flex flex-wrap overflow-hidden">
      {/* "refokus." text */}
      <div className="flex-1">
        <h1 className="text-[110px] sm:text-[10rem] font-semibold leading-none tracking-tight">
          refokus.
        </h1>
      </div>

      {/* Right side content */}
      <div className="flex flex-col flex-1">
        {/* Socials and Sitemap */}
        <div className="flex flex-row justify-around p-3">
          <div className="pr-4">
            <h4 className="mb-4 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="pl-4">
            <h4 className="mb-4 text-zinc-100 capitalize">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-100">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Paragraph and Image */}
      <div className="flex flex-col px-4 py-2 flex-1">
        <p className="mb-4 w-80">
          Refokus is pioneering digital agency driven by design and empowered by
          technology.
        </p>
        <img
          className="w-32 mt-4"
          src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
          alt="logo"
        />
      </div>
    </div>
    // </div>
  );
}

export default Footer;
