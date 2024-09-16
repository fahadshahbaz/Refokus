import Button from "./Button";

const Product = ({val}) => {
  return (
    <section className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-medium">{val.title}</h1>
        <div className="w-1/3">
        <p className="mb-10">{val.description}</p>
        <div className="flex flex-wrap gap-5 items-center">
        {val.live && <Button />}
        {val.case && <Button title="Case Study"/>}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
