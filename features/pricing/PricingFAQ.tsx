"use client";

const faqList = [
  {
    id: 0,
    content: "Does Chatwoot offer a money-back guarantee?",
    description:
      "You can upgrade your plan by going to Settings -> Billing. You will be able to see the available plans and upgrade to the desired plan as well as see the previous invoices.",
  },
  {
    id: 1,
    content: "How can I upgrade a plan?",
    description:
      "Yes, you can get refunds for all Cloud plans. We will refund you the amount based on the cancellation date. If you have any questions, drop us an email at sales@chatwoot.com.",
  },
  {
    id: 2,
    content: "Where is chatwoot.com hosted?",
    description:
      "Chatwoot is hosted on the Heroku. The servers are based in the US. If you need to know more about the data storage and compliance, please reach out to us at hello@chatwoot.com",
  },
  {
    id: 3,
    content:
      "Do you have special pricing for open source / non-profit projects?",
    description:
      "Yes, we offer the Startups plan free of cost for open source projects. Contact us at hello@chatwoot.com with the details to the project to receive this discount.",
  },
  {
    id: 4,
    content: "Can I get an export of my data?",
    description:
      "Your data belongs to you. You can always export your data from chatwoot.com. Please get in touch with hello@chatwoot.com for more instructions.",
  },
];
//   return (
//     <section aria-labelledby="faq-heading" className="bg-white">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
//           <h2 className="text-center text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
//             Frequently asked questions
//           </h2>
//           {faqList.map((item) => (
//             <dl
//               key={item.content}
//               className="mt-6 space-y-6 divide-y divide-gray-200"
//             >
//               <Disclosure as={"div"} className="pt-6">
//                 {({ open }) => (
//                   <>
//                     <dt className="text-lg">
//                       <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
//                         <span className="font-medium text-gray-900">
//                           {item.content}
//                         </span>
//                         <span className="ml-6 h-7 flex items-center">
//                           <FillChevronDownIcon className={`icon h-7 w-7 transition-transform ${open ? 'rotate-180 transform': ''}`} />
//                         </span>
//                       </Disclosure.Button>
//                     </dt>
//                     <Disclosure.Panel className="mt-2 pr-12">
//                       <p className="text-base text-gray-500">
//                         {item.description}
//                       </p>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             </dl>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PricingFAQ

const PricingFAQ = () => {
  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqList.map((faqitem) => (
              <div className="pt-6">
                <details className="group">
                  <summary className="text-lg w-full flex justify-between items-start font-medium text-gray-400 cursor-pointer list-none">
                    <span className="font-medium text-gray-900">
                      {faqitem.content}
                    </span>
                    <span className="bg-gray-400 rounded-full transition group-open:rotate-180">
                      <svg
                        className="text-white"
                        fill="none"
                        height="1em"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="1em"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>

                  <div className="mt-2 pr-12">
                    <p className="text-base text-gray-500 group-open:animate-fadeIn">
                      {faqitem.description}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
