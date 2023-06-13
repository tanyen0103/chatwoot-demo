import FilledCheckIcon from "icons/FilledCheck"
import Image from "next/image"

const features = [
  'Get notified on every mentions.',
  'Reply to any tweet in thread.',
  'Reply to your customers via private DM.'
]

const ChannelTwitterProfileManagement = () => {
  return (
    <section className="max-w-7xl mx-auto pt-16 pb-12 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div className="lg:max-w-lg md:max-w-sm sm:py-4 text-center sm:text-center md:text-left">
          <h2 className="text-3xl font-semibold leading-10 mb-4 mb-md-6">
            Manage your Twitter profile easily
          </h2>
          <p className="text-slate-400 text-xl font-normal mb-4 mb-md-6">
            Connect your Twitter account with Chatwoot, manage tweets and DMs
            without leaving the dashboard.
          </p>

          {features.map((item) => (
            <div key={item} className="flex items-center mb-4">
              <div className="h-8 w-8">
                <FilledCheckIcon className="icon text-woot h-8 w-8" />
              </div>
              <p className="text-slate-500 text-left text-lg font-normal pl-2">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:max-w-lg md:max-w-sm">
          <Image
            width={512}
            height={275}
            src="/images/features/channels/tweets.png"
            alt="img"
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default ChannelTwitterProfileManagement
