import PricingButton from "../PricingButton";
import React from "react";

const PricingTilteDesk = ({
  price,
  agent,
  month,
  bill,
  btn_name,
  btn_src,
}: {
  price: string;
  agent: string;
  month: string;
  bill: string;
  btn_name: string;
  btn_src: string;
}) => {
  return (
    <td className="h-full py-8 px-6 align-top">
      <div className="relative h-full table w-full">
        <p>
          <span className="text-4xl tracking-tight font-display font-bold text-gray-900">
            {price}
          </span>
          <span className="text-base font-medium text-gray-500 ">
            /{agent}/{month}
          </span>
        </p>
        <p className="mt-2 mb-16 text-base text-gray-500">{bill}</p>
        <PricingButton
          name={btn_name}
          srcs={btn_src}
          className="font-display absolute bottom-0 flex-grow block w-full bg-woot-dark border rounded-md 5 py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
        />
      </div>
    </td>
  );
};

export default PricingTilteDesk;
