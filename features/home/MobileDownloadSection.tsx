import BigCircleIcon from "icons/BigCircle";
import SmallCircleIcon from "icons/SmallCircle";
import Image from "next/image";
;

const MobileAppsSection = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-black to-blue-900 relative rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <div className="text-white p-12 text-center sm:text-left relative z-20">
            <h3 className="text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00eeff] to-woot">
                Customer interaction, on the go
              </span>
            </h3>
            <p className="text-xl mt-8">
              Chatwoot for mobile enables you to browse conversations, reply to
              messages and collaborate with your team. Now available on Android
              and iOS.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-xs mx-auto lg:mx-0">
              <a
                href="https://apps.apple.com/app/id1495796682"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/home/app-store.png"
                  alt="Apple app store"
                  className="w-full h-auto"
                  width={152}
                  height={46}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.chatwoot.app&amp;hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/home/play-store.png"
                  alt="Google play store"
                  className="w-full h-auto"
                  width={152}
                  height={46}
                />
              </a>
            </div>
          </div>
          <div className="relative h-96 md:h-full mt-0 md:mt-20">
            <div className="z-10 absolute left-1/2 top-4 h-[800px] w-[800px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
              <BigCircleIcon className="absolute inset-0 h-full w-full animate-spin-slow" />
              <SmallCircleIcon className="absolute inset-0 h-full w-full animate-spin-reverse-slower" />
            </div>
            <Image
              sizes="(max-width: 1040px) 100vw, 1040px"
              src="/images/home/app-w_1040.webp"
              alt="Chatwoot Mobile Apps"
              className="h-96 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
              width={318}
              height={384}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
