// import React from "react";

// function Footer() {
//   return (
//     <div className="w-full">
//       <div className="max-w-screen-xl mx-auto py-10 flex items-center justify-between">
//         {/* Left Div for name */}
//         <div className="basis-1/2 border border-violet-400">
//           <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
//             refokus.
//           </h1>
//         </div>
//         {/* Right div for links and image */}
//         <div className="basis-1/2 flex gap-4">
//           <div className="basis-1/3">
//             <h4 className=" mb-10 text-zinc-400 capitalize">socials</h4>
//             {["instagram", "twitter", "LinkedIn"].map((item, index) => (
//               <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
//             ))}
//           </div>
//           <div className="basis-1/3">
//             <h4 className=" mb-10 text-zinc-100 capitalize">Sitemap</h4>
//             {["Home", "Work", "Careers", "Contact"].map((item, index) => (
//               <a key={index} className="block mt-2 capitalize text-zinc-100">{item}</a>
//             ))}
//           </div>
//           <div className="basis-1/2 flex flex-col items-end">
//             <p className="text-right">
//               Refokus is pioneering digital agency driven by design and
//               empowered by technology.
//             </p>
//             <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


// import React from "react";

// function Footer() {
//   return (
//     <div className="w-full">
//       <div className="max-w-screen-xl mx-auto py-5 pb-5 flex flex-wrap sm:flex-nowrap justify-between items-center gap-10">
//         {/* Left Div for name */}
//         <div>
//           <h1 className="text-[8rem] sm:text-[10.5rem] font-medium leading-none tracking-tight">
//             refokus.
//           </h1>
//         </div>
//         {/* Right div for links and image */}
//         <div className="flex justify-between items-center flex-wrap flex-1 sm:flex-nowrap gap-5 sm:gap-0">
//         <div className="flex flex-1 px-20 sm:px-30 justify-between items-center gap-20">
//           <div>
//             <h4 className="mb-10 text-zinc-400 capitalize">socials</h4>
//             {["instagram", "twitter", "LinkedIn"].map((item, index) => (
//               <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
//             ))}
//           </div>
//           <div>
//             <h4 className="mb-10 text-zinc-100 capitalize">Sitemap</h4>
//             {["Home", "Work", "Careers", "Contact"].map((item, index) => (
//               <a key={index} className="block mt-2 capitalize text-zinc-100">{item}</a>
//             ))}
//           </div>
//           </div>
//           <div className="sm:w-60 flex flex-1 pr-4 flex-col items-end">
//             <p className="text-right">
//               Refokus is pioneering digital agency driven by design and
//               empowered by technology.
//             </p>
//             <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';

function Footer() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:items-start lg:justify-between">
        {/* "refokus." text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl sm:text-7xl lg:text-[9rem] xl:text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          {/* Socials and Sitemap */}
          <div className="flex flex-row justify-between">
            <div className="w-1/2 pr-4">
              <h4 className="mb-4 text-zinc-400 capitalize">socials</h4>
              {["instagram", "twitter", "LinkedIn"].map((item, index) => (
                <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
              ))}
            </div>
            <div className="w-1/2 pl-4">
              <h4 className="mb-4 text-zinc-100 capitalize">Sitemap</h4>
              {["Home", "Work", "Careers", "Contact"].map((item, index) => (
                <a key={index} className="block mt-2 capitalize text-zinc-100">{item}</a>
              ))}
            </div>
          </div>

          {/* Paragraph and Image */}
          <div className="w-full">
            <p className="mb-4">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img 
              className="w-32 mt-4" 
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" 
              alt="logo" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;