import Image from 'next/image'


const ClientBrandsSection = () => {
  return (
    <section className='pt-12 pb-16'>
      <div className='container mx-auto'>
        <p className='text-center text-gray-500 mb-6 font-semibold text-base'>
          Used by 15000+ organizations worldwide
        </p>
      </div>
      <div className='container mx-auto relative overflow-hidden gradient-fade clients-container'>
        <div className='w-[3492px] slide-animate flex'>
          <div className='relative overflow-hidden inline-block w-[1500px] h-8'>
            <Image
              width={1500}
              height={32}
              alt='clients'
              className='absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-500'
              src='/images/home/clients.jpg'
            />
          </div>
          <div className='relative overflow-hidden inline-block w-[1500px] h-8 ml-8'>
            <Image
              width={1500}
              height={32}
              alt='clients'
              className='absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-500'
              src='/images/home/clients.jpg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientBrandsSection
