import Image from "next/image"


const ChannelList = () => {
  return (
    <section className="max-w-7xl mx-auto pt-24 pb-12 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
      <div className="grid grid-cols-1 gap-8 place-items-center">
        <h1 className="text-4xl leading-10 font-medium text-center mt-8 md:mt-0 mb-6 mb-md-6">
          Connect with your customer through more than one channel
        </h1>
        <div className="max-w-2xl">
          <Image
            width={672}
            height={90}
            src="/images/features/channels/supported-channels.png"
            alt="img"
          />
        </div>
      </div>
    </section>
  )
}

export default ChannelList
