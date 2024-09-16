import React from "react";

const Stripe = ({val}) => {
  return (
    <section className="min-w-[16.7%] px-10 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
      <img className="h-4" src={val.url} alt="Logo" />
      <span className="font-semibold text-lg">{val.number}</span>
    </section>
  );
};

export default Stripe;
