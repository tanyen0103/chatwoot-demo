"use client"
import Image from "next/image";
;

const FooterSubcription = () => {
  return (
    <div className="flex flex-col justify-between pt-8 mt-8 border-t border-gray-100 lg:flex-row lg:grid-cols-8">
      <div className="space-y-8 w-full">
        <div>
          <h3 className="text-base font-medium text-gray-800">
            Subscribe to our newsletter
          </h3>
          <p className="mt-1 text-base text-gray-500">
            The latest product updates, articles, and resources, sent to your
            inbox once a month.
          </p>
        </div>
        <form className="mt-4 sm:flex sm:max-w-md lg:mt-0" method="post">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            value=""
            name="email"
            id="email-address"
            autoComplete="email"
            required
            className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-woot focus:border-woot focus:placeholder-gray-400 sm:max-w-xs"
            placeholder="Enter your email"
            onChange={() => {}}
          />
          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <div className="h-[42px] overflow-hidden">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-woot-dark hover:bg-woot-dark focus:outline-none h-full min-w-[140px]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-shrink-0 w-full pt-8 mx-auto mt-8 space-y-2 border-t border-gray-100 lg:mt-0 lg:pt-0 lg:border-0 lg:w-auto">
        <h3 className="w-full text-base font-medium text-center text-gray-800">
          Secure by design
        </h3>
        <Image
          src="/images/soc-monochrome.webp"
          alt="SOC 2 Type 2 complaince badge"
          width={96}
          height={96}
          className="max-w-[6rem] w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default FooterSubcription;
