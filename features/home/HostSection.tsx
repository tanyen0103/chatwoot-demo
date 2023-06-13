import Image from "next/image"


const HostSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-800">
            Host Chatwoot on your premises, own your data
          </h2>
          <p className="text-xl mt-6 text-slate-500">
            Chatwoot, by default, supports self-hosted installations so that you
            can own your customer data and be compliant with the regulations. In
            addition, our customizable interfaces and powerful APIs empower you
            to solve custom support use cases and provide an excellent
            experience to your customers, employees, and partners.
          </p>
        </div>
        <div className="mt-16 place-items-center grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <Image
              sizes="(max-width: 1380px) 100vw, 1380px"
              src="/images/home/w_1380.webp"
              alt="chatwoot-apis"
              className="w-full h-auto"
              width={560}
              height={307}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Open-source, self-hosted, and privacy compliant
            </h2>
            <p className="text-lg mt-6 text-slate-600">
              Take ownership of your data by self-hosting Chatwoot on your
              servers or any cloud service provider. Be compliant with the
              regulations like GDPR, CPRA, and HIPAA without sending data to
              third-party services.
            </p>
            <a
              className="inline-block mt-8 px-6 py-2 bg-woot text-white rounded-md font-display font-medium"
              href="/docs/self-hosted"
            >
              Read more →
            </a>
          </div>
        </div>
        <div className="mt-16 place-items-center grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-slate-800">
              Solve custom support use cases using our APIs
            </h2>
            <p className="text-lg mt-6 text-slate-600">
              Easily extend Chatwoot with custom integrations. Choose from a
              rich set of developer APIs and never be limited by platform
              features.
            </p>
            <a
              className="inline-block mt-8 px-6 py-2 bg-woot text-white rounded-md font-display font-medium"
              href="/developers/api/"
            >
              Read Documentation →
            </a>
          </div>
          <div className="order-1 md:order-2">
            <Image
              sizes="(max-width: 1400px) 100vw, 1400px"
              src="/images/home/w_1400.webp"
              alt="chatwoot-apis"
              width={560}
              height={398}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostSection
