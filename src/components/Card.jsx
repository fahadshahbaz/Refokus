// import { IoIosArrowRoundForward } from "react-icons/io";
// import { motion } from "framer-motion";

// const Card = ({ width, start, para, hover = "false" }) => {
//   return (
//     <motion.div
//       whileHover={{ backgroundColor: hover == "true" && "#7443ff", padding: "25px" }}
//       className={`bg-zinc-800 p-5 rounded-xl ${width} h-[20rem] sm:h-[30rem] flex flex-col justify-between select-none`}
//     >
//       <div className="w-full">
//         <div className="w-full flex justify-between items-center">
//           <h3>Up Next: Culture</h3>
//           <IoIosArrowRoundForward />
//         </div>
//         <h1 className="sm:text-3xl font-medium mt-2">let's get to it</h1>
//       </div>
//       <div className="down w-full">
//         {start && (
//           <>
//             <h1 className="text-3xl sm:text-7xl font-semi-bold tracking-tight leading-none">
//               Start a Project
//             </h1>
//             <button className="rounded-full py-2 px-5 mt-5 border border-zinc-50">
//               Contact Us
//             </button>
//           </>
//         )}

//         {para && (
//           <p className="text-sm text-zinc-500 font-medium">
//             Explore what drives our team.
//           </p>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Card;



import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para, isHovered }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: isHovered ? "#7443ff" : undefined, padding: "25px" }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} h-[20rem] sm:h-[30rem] flex flex-col justify-between select-none`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h3>Up Next: Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="sm:text-3xl font-medium mt-2">let's get to it</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-3xl sm:text-7xl font-semi-bold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
