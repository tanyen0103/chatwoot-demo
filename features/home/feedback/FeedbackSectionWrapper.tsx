import FeedbackBgMiddle from 'icons/FeedbackBgMiddle'
import FeedbackBgTop from 'icons/FeedbackBgTop'
import { ReactNode } from 'react'

const FeedbackSectionWrapper = ({children}:{children: ReactNode}) => {
  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <FeedbackBgTop className="ml-[max(50%,38rem)] w-[82.0625rem]" />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
        <FeedbackBgMiddle className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default FeedbackSectionWrapper