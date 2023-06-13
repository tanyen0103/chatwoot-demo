"use clients"

import PricingTitleMobile from "./PricingTitleMobile";
import { PriceItemType } from "types/Price"
import { Fragment, useCallback } from "react";
import PringCheckMobile from "./PringCheckMobile";

const cardprices = [
  {
    name: "Hacker",
    price: "$0",
    agent: "agent",
    month: "month",
    bill: "upto 2 agents",
    btn_name: "Create a free account",
    btn_src: "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=hacker",
  },
  {
    name: "Startups",
    price: "$19",
    agent: "agent",
    month: "month",
    bill: "billed annually",
    btn_name: "Buy Startups",
    btn_src: "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups",
  },
  {
    name: "Business",
    price: "$39",
    agent: "agent",
    month: "month",
    bill: "billed annually",
    btn_name: "Buy Business",
    btn_src: "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups",
  },
  {
    name: "Enterpris",
    price: "$99",
    agent: "agent",
    month: "month",
    bill: "billed annually",
    btn_name: "Buy Enterprise",
    btn_src: "https://app.chatwoot.com/app/auth/signup?utm_source=pricing-page&amp;plan=startups",
  },
];


const TableMobile = ({ dataSource }:{ dataSource:PriceItemType[] }) => {
  const priceGenerate = useCallback(
    (fieldName: "hacker" | "business" | "startups" | "enterprise" ) => {
      let currenGroup = ""

      return dataSource.map((item) => {
        let showGroup = item.group !== currenGroup
        if(showGroup) {
          currenGroup = item.group
        }
        return (
          <Fragment key={item.name}>
            {showGroup && (
              <tr>
                <th
                  colSpan={2}
                  className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-base font-medium text-gray-900 text-left"
                >
                  {item.group}
                </th>
              </tr>
            )}
            <PringCheckMobile
              th_tbl={item.name}
              check_tbl={item[fieldName]}
            />
          </Fragment>
        )
      })
    },
    [dataSource]
  )
  
  return (
    <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
      <section>
        <PricingTitleMobile
          name={cardprices[0].name}
          price={cardprices[0].price}
          agent={cardprices[0].agent}
          month={cardprices[0].month}
          bill={cardprices[0].bill}
          btn_name={cardprices[0].btn_name}
          btn_src={cardprices[0].btn_src}
        />

        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-200">
            {priceGenerate("business")}
          </tbody>
        </table>

        <div className="py-5 border-b border-t border-gray-200 px-4">
          <a
            href={cardprices[0].btn_src}
            className="block w-full font-display bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
          >
            {cardprices[0].btn_name}
          </a>
        </div>
      </section>

      {/* Startups section  */}
      <section>
        <PricingTitleMobile
          name={cardprices[1].name}
          price={cardprices[1].price}
          agent={cardprices[1].agent}
          month={cardprices[1].month}
          bill={cardprices[1].bill}
          btn_name={cardprices[1].btn_name}
          btn_src={cardprices[1].btn_src}
        />

        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-200">
            {priceGenerate("startups")}
          </tbody>
        </table>

        <div className="py-5 border-b border-t border-gray-200 px-4">
          <a
            href={cardprices[1].btn_src}
            className="block w-full font-display bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
          >
            {cardprices[1].btn_name}
          </a>
        </div>
      </section>

      {/* Business section  */}
      <section>
        <PricingTitleMobile 
          name={cardprices[2].name}
          price={cardprices[2].price}
          agent={cardprices[2].agent}
          month={cardprices[2].month}
          bill={cardprices[2].bill}
          btn_name={cardprices[2].btn_name}
          btn_src ={cardprices[2].btn_src}
        />

        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-200">
            {priceGenerate("business")}
          </tbody>
        </table>

        <div className="py-5 border-b border-t border-gray-200 px-4">
          <a
            href={cardprices[2].btn_src}
            className="block w-full font-display bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
          >
            {cardprices[2].btn_name}
          </a>
        </div>
      </section>

      {/* Enterprise section  */}
      <section>
        <PricingTitleMobile
          name={cardprices[3].name}
          price={cardprices[3].price}
          agent={cardprices[3].agent}
          month={cardprices[3].month}
          bill={cardprices[3].bill}
          btn_name={cardprices[3].btn_name}
          btn_src={cardprices[3].btn_src}
        />

        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-200">
            {priceGenerate("business")}
          </tbody>
        </table>

        <div className="py-5 border-t border-gray-200 px-4">
          <a
            href={cardprices[3].btn_src}
            className="block w-full font-display bg-woot-dark border rounded-md py-2 text-base font-semibold text-white text-center hover:bg-woot-darker"
          >
            {cardprices[3].btn_name}
          </a>
        </div>
      </section>
    </div>
  );
};

export default TableMobile;
