import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-20 h-auto sm:h-[16rem] md:h-[23rem] text-white border border-red-600">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 sm:py-0 px-4 sm:px-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl capitalize font-medium mb-4 sm:mb-0">
          {val.title}
        </h1>
        <div className="dets w-full sm:w-1/3 md:w-1/4">
          <p className="mb-6 sm:mb-10">{val.description}</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {val.live && <Button title="Live Project" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;