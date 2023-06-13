"use client";

import { Fragment, useRef } from "react";
import { PriceItemType } from "types/Price";
import PriceGroup from "../PriceGroup";
import PricingCheck from "./PricingCheckDesktop";
import Cardpricing from "./PricingTitleDesktop";

const cardprices = [
  {
    name: "Hacker",
    price: "$0",
    agent: "agent",
    month: "month",
    bill: "upto 2 agents",
    btn_name: "Create a free account",
    btn_src:
      "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=hacker",
  },
  {
    name: "Startups",
    price: "$19",
    agent: "agent",
    month: "month",
    bill: "billed annually",
    btn_name: "Buy Startups",
    btn_src:
      "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups",
  },
  {
    name: "Business",
    price: "$39",
    agent: "agent",
    month: "month",
    bill: "billed annually",
    btn_name: "Buy Business",
    btn_src:
      "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups",
  },
  {
    name: "Enterpris",
    price: "$99",
    agent: "agent",
    month: "month",
    bill: "billed annually",
    btn_name: "Buy Enterprise",
    btn_src:
      "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups",
  },
];

const PricingTableDesk = ({ dataSource }: { dataSource: PriceItemType[] }) => {
  const currenGroup = useRef("");
  return (
    <div className="hidden lg:block">
      <table className="w-full h-px table-auto">
        <caption className="sr-only">Pricing plan comparison</caption>
        <thead className="font-display">
          <tr>
            <th
              className="pb-4 px-6 text-base font-bold text-gray-900 text-left"
              scope="col"
            >
              <span className="sr-only">Feature by</span>
              <span>Plans</span>
            </th>
            <th
              className="pb-4 px-6 text-base leading-6 font-bold text-gray-900 text-left w-1/5"
              scope="col"
            >
              Hacker
            </th>
            <th
              className="pb-4 px-6 text-base leading-6 font-bold text-gray-900 text-left w-1/5"
              scope="col"
            >
              Startups
            </th>
            <th
              className="pb-4 px-6 text-base leading-6 font-bold text-gray-900 text-left w-1/5"
              scope="col"
            >
              Business
            </th>
            <th
              className="pb-4 px-6 text-base leading-6 font-bold text-gray-900 text-left w-1/5"
              scope="col"
            >
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200 divide-y divide-gray-200">
          {/* Pricing */}
          <tr className="sticky top-20 bg-white backdrop-blur bg-opacity-50 firefox:bg-opacity-100 border-bottom">
            <th
              className="py-8 px-6 font-display text-base font-bold text-gray-900 text-left align-top"
              scope="row"
            >
              Pricing
            </th>
            {cardprices.map((cardprice, index) => (
              <Cardpricing
                key={index}
                price={cardprice.price}
                agent={cardprice.agent}
                month={cardprice.month}
                bill={cardprice.bill}
                btn_name={cardprice.btn_name}
                btn_src={cardprice.btn_src}
              />
            ))}
          </tr>

          {/* Channels */}
          <tr>
            <th
              className="bg-gray-50 font-display py-3 pl-6 text-base font-semibold text-gray-900 text-left gilroy"
              colSpan={5}
              scope="colgroup"
            >
              Channels
            </th>
          </tr>

          {dataSource.map((item, index) => {
            let showGroup = item.group !== currenGroup.current;
            if (item.group !== currenGroup.current) {
              currenGroup.current = item.group;
              showGroup = true;
            }
            return (
              <Fragment key={item.name}>
                {showGroup && (
                  <PriceGroup key={item.group + index} name={item.group} />
                )}
                <PricingCheck {...{ item }} />
              </Fragment>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-200">
            <th className="sr-only" scope="row">
              Choose your plan
            </th>
            <td className="pt-5 px-6">
              <a
                href="https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=hacker"
                className="font-display block w-full bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
              >
                Create a free account
              </a>
            </td>
            <td className="pt-5 px-6">
              <a
                href="https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups"
                className="font-display block w-full bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
              >
                Buy Startups
              </a>
            </td>
            <td className="pt-5 px-6">
              <a
                href="https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=business"
                className="font-display block w-full bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
              >
                Buy Business
              </a>
            </td>
            <td className="pt-5 px-6">
              <a
                href="https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=enterprise"
                className="font-display block w-full bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
              >
                Buy Enterprise
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PricingTableDesk;
