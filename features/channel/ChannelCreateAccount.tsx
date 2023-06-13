import Image from "next/image"


const ChannelCreateAccount = () => {
  return (
    <section className="max-w-7xl mx-auto pt-24 pb-12 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div className="order-2 sm:order-2 md:order-1 lg:max-w-lg md:max-w-sm sm:py-8 text-center sm:text-center md:text-left pb-4">
          <div className="px-4 py-1 m-auto md:mb-4 md:m-0 bg-blue-100 w-fit rounded-3xl">
            <span className="text-woot flex items-center text-sm font-medium">
              Omnichannel inbox
            </span>
          </div>
          <h1 className="text-5xl font-semibold mt-8 md:mt-0 mb-6 mb-md-6">
            Delight your customers wherever they are
          </h1>
          <p className="text-slate-400 text-2xl font-normal mb-6 mb-md-6">
            Connect any conversation channel and engage your customers from one
            place.
          </p>
          <div>
            <a
              href="https://app.chatwoot.com/app/auth/signup?utm_source=channels"
              className="group navbar-register-link"
            >
              <span>Create a free account</span>
            </a>
          </div>
        </div>
        <div className="order-1 sm:order-1 md:order-2">
          <Image
            width={624}
            height={370}
            src="/images/features/channels/multiple-conversations.png"
            alt="img"
          />
        </div>
      </div>
    </section>
  )
}

export default ChannelCreateAccount
