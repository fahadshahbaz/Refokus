import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width, start, para, hover = "false"}) => {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-2">Heading simple</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className=" text-7xl font-semi-bold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
