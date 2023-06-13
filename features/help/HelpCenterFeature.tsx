import APIIcon from "icons/API"
import ContributingIcon from "icons/Contributing"
import FAQIcon from "icons/FAQ"
import HandbookIcon from "icons/Handbook"
import ProductDocument from "icons/ProductDocument"
import SelfHostedIcon from "icons/SelfHosted"

const iconClass = "icon w-6 h-6 text-black"

const helpList = [
  {
    id: 1,
    title: "Self Hosted Chatwoot",
    desciption: "How to setup and run self-hosted instance of Chatwoot",
    icon: <SelfHostedIcon className={iconClass} />,
    href: "#",
  },
  {
    id: 2,
    title: "Product Documentation",
    desciption: "Features on Chatwoot, how to use Chatwoot",
    icon: <ProductDocument className={iconClass} />,
    href: "#",
  },
  {
    id: 0,
    title: "API Reference",
    desciption: "Find details of all the REST API resources",
    icon: <APIIcon className={iconClass} />,
    href: "#",
  },
  {
    id: 0,
    title: "Contributing Guide",
    desciption:
      "Learn how to set up Chatwoot on your local machine and contribute",
    icon: <ContributingIcon className={iconClass} />,
    href: "#",
  },
  {
    id: 0,
    title: "Handbook",
    desciption:
      "A guide on how we run Chatwoot as an organization, how we work etc",
    icon: <HandbookIcon className={iconClass} />,
    href: "#",
  },
  {
    id: 0,
    title: "Ask a question",
    desciption:
      "Do you have questions? Reach out to Chatwoot team for assistance",
    icon: <FAQIcon className={iconClass} />,
    href: "#",
  },
]

const HelpCenterFeature = () => {
  return (
    <div className="not-prose grid grid-cols-1 gap-6 sm:grid-cols-3">
      {helpList.map((item) => (
        <div
          key={item.title}
          className="group relative rounded-xl border border-slate-200 cursor-pointer"
        >
          <a href={item.href}>
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100"></div>
            <div className="relative overflow-hidden rounded-xl p-6">
              {item.icon}
              <h2 className="mt-4 text-base text-slate-800 font-semibold">
                <div>
                  <span className="absolute -inset-px rounded-xl"></span>{" "}
                  {item.title}
                </div>
              </h2>
              <p className="mt-1 text-base text-slate-700">{item.desciption}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default HelpCenterFeature
