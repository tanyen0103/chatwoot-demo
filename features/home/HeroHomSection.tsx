export default function HeroHomeSection() {
  return (
    <section className="-mt-20 hero relative overflow-hidden">
      <div className="pt-28 md:pt-36 2xl:pt-52 pb-24 px-3 text-center">
        <a
          href="/v3"
          className="max-w-max mx-auto rounded-full mb-8 bg-woot/10 flex items-center p-0.5 text-sm text-woot-darker"
        >
          <span className="max-w-max flex-shrink-0 h-6 px-4 bg-white rounded-full flex items-center shadow-sm font-bold text-woot-darker/75">
            v3.0 Launch
          </span>
          <p className="pl-4 truncate font-medium">Road to Chatwoot V3</p>
          <span className="pl-2 pr-4 font-medium">→</span>
        </a>
        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-900 sm:text-6xl xl:text-7xl">
          {" "}
          Delightful customer{" "}
          <span className="md:block">
            {" "}
            relationships,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#32b7e4]">
              {" "}
              at scale
            </span>
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-2xl tracking-tight text-slate-700">
          {" "}
          Chatwoot gives you all the tools to manage conversations, build
          relationships and delight your customers from one place.{" "}
        </p>
        <div className="max-w-max grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mx-auto mt-8 z-20">
          <a
            href="https://app.chatwoot.com/app/auth/signup?utm_source=landing-hero"
            className="inline-flex justify-center items-center space-x-2 rounded-lg px-6 py-3 text-base md:text-lg font-medium bg-woot-dark text-white shadow-lg shadow-blue-700/50 border border-woot-dark button-1 relative group"
          >
            <span className="button-text group-hover:-translate-x-2 transition-transform duration-300 ease-out">
              Create a free account
            </span>
          </a>
          <a
            href="/request-a-demo"
            className="flex justify-center space-x-2 rounded-lg px-6 py-3 text-base md:text-lg font-medium bg-white border border-gray-100 shadow-lg will-change-transform"
          >
            <span>Request a demo</span>
          </a>
        </div>
        <p className="text-center mt-8 text-slate-600">
          {" "}
          To self-host Chatwoot,{" "}
          <a href="/deploy" className="">
            click here.
          </a>
        </p>
        <div className="max-w-6xl mx-auto mt-4 px-4"></div>
      </div>
    </section>
  );
}
