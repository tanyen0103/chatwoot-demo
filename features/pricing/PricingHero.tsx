export default function PricingHero() {
  return (
    <div className="sm:flex sm:flex-col sm:align-center max-w-4xl mx-auto mt-11 mb-11 p-8">
      <h1 className="text-5xl tracking-tight font-bold text-gray-900 sm:text-center mb-6">
        {" "}
        Pricing plans to suit you{" "}
      </h1>
      <p className="text-xl text-gray-500 sm:text-center leading-relaxed mb-4">
        Chatwoot helps 15000+ organizations worldwide to manage their customer
        engagement workflows. Signup for your 15-day free trial, and experience
        the full power of Chatwoot.
      </p>
      <p className="text-center text-gray-500">
        Looking for self-hosted plans?
        <a href="#" className="">
          {" "}
          Click here to know more{" "}
        </a>
      </p>
    </div>
  );
}
