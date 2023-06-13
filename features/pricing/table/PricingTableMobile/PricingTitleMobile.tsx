import React from "react";
import Link from "next/link";

const PricingTitlteMobile = ({
  name,
  price,
  agent,
  month,
  bill,
  btn_name,
  btn_src,
}:{
  name?: string;
  price?: string;
  agent?: string;
  month?: string;
  bill?: string;
  btn_name?: string;
  btn_src: string;
}) => {
  return (
    <div className="px-4 mb-8">
      <h2 className="text-lg leading-6 font-medium text-gray-900 font-display">
        {name}
      </h2>
      <p className="mt-4">
        <span className="text-4xl tracking-tight font-bold text-gray-900">
          {price}
        </span>
        <span className="text-base font-medium text-gray-500">
          /{agent}/{month}
        </span>
      </p>
      <p className="mt-4 text-base text-gray-500">{bill}</p>
      <Link
        href={btn_src}
        className="mt-6 block border rounded-md bg-woot-dark w-full py-2 font-display text-base font-semibold text-white text-center hover:bg-woot-darker"
      >
        {btn_name}
      </Link>
    </div>
  );
};

export default PricingTitlteMobile;
