import React from "react";

const Stripe = ({val}) => {
  return (
    <section className="min-w-[16.7%] px-2 sm:px-6 py-6 border border-zinc-600 flex items-center justify-between">
      <img className="h-[.8rem] sm:h-4" src={val.url} alt="Logo" />
      <span className="font-semibold text-lg">{val.number}</span>
    </section>
  );
};

export default Stripe;

