import Image from 'next/image'


const OmnichannelSupportCenterSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[url('/background.jpg')] bg-cover bg-center">
      <div className='max-w-6xl mx-auto relative text-white'>
        <div className='mx-auto max-w-3xl md:text-center relative z-20'>
          <h2 className='font-display text-4xl font-bold tracking-tight sm:text-5xl mb-4'>
            Omnichannel support center
          </h2>
          <p className='mt-4 mb-6 text-xl'>
            Chatwoot connects with popular customer communication channels like Email, Website
            live-chat, Facebook, Twitter, WhatsApp, Instagram, Line, etc. This helps you deliver a
            consistent customer experience across channels – from a single dashboard.
          </p>
          <a href='/features/channels' className='bg-white px-4 py-2 rounded-md'>
            Learn More →
          </a>
        </div>
        <div className='h-[150px] md:h-[250px]'></div>
        <Image
          width={600}
          height={600}
          src='/images/home/omnichannel.webp'
          alt='Chatwoot Omnichannel'
          className='absolute w-[600px] h-[600px] object-contain -bottom-[85%] left-1/2 -translate-x-1/2 z-10'
        />
      </div>
    </section>
  )
}

export default OmnichannelSupportCenterSection
