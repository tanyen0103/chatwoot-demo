import HelpCenterFAQ from "./HelpCenterFAQ"
import HelpCenterFeature from "./HelpCenterFeature"

const HelpCenterContent = () => {
  return (
    <div className="grid bg-white w-full">
      <div className="px-4 max-w-5xl m-auto">
        <HelpCenterFeature />
        <HelpCenterFAQ />
      </div>
    </div>
  )
}

export default HelpCenterContent
