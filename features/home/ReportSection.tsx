"use client"
import { Tab } from "@headlessui/react"
import FilledCheckIcon from "icons/FilledCheck"
import ReportIcon from "icons/ReportIcon"
import Image from "next/image"
import { Fragment, useCallback, useState } from "react"
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

const categories = [
  {
    name: "Reports",
    color: "rgb(31, 147, 255)",
    title: "Stay informed with auto-generated reports",
    description:
      "See what is currently going on with your conversations and agents, or assess which labels or inboxes are the most active, and analyze various important key performance indicators - from your Chatwoot dashboard.",
    imageUrl: "https://www.chatwoot.com/features/reports.webp",
    features: [
      "Conversations Report",
      "Agents Report",
      "Labels Report",
      "Inbox Report",
      "Teams Report",
    ],
  },
  {
    name: "CSAT",
    color: "rgb(99, 102, 241)",
    title: "Customer Satisfaction Analysis for conversations",
    description: "Enable CSAT survey to automatically ask your customers to rate their conversation with you. View your comprehensive CSAT report, whenever you want.",
    imageUrl: "https://www.chatwoot.com/features/csat.webp",
    features: [
      "Conversations Report",
      "Agents Report",
      "Labels Report",
      "Inbox Report",
      "Teams Report",
    ],
  },
  {
    name: "Campaigns",
    color: "rgb(20, 184, 166)",
    title: "Campaigns for proactive customer engagement",
    description: "Create ongoing or one-off live-chat campaigns to engage your customers. Send targeted messages to your customers based on their visits and how they spend time on your application.",
    imageUrl: "https://www.chatwoot.com/features/campaigns.webp",
    features: [
      "Conversations Report",
      "Agents Report",
      "Labels Report",
      "Inbox Report",
      "Teams Report",
    ],
  },
  {
    name: "Labels",
    color: "rgb(244, 63, 94)",
    title: "Organize your conversations with labels",
    description: "Create custom labels for your organization in minutes. Simply select relevant labels from your chat's sidebar while chatting with your customers.",
    imageUrl: "https://www.chatwoot.com/features/labels.webp",
    features: [
      "Conversations Report",
      "Agents Report",
      "Labels Report",
      "Inbox Report",
      "Teams Report",
    ],
  },
]

const ReportTabIconList = ({ tabName }: { tabName: string }) => {
  switch (tabName) {
    case "Reports":
      return <ReportIcon className="icon" />
    case "CSAT":
      return <ReportIcon className="icon" />
    case "Campaigns":
      return <ReportIcon className="icon" />
    case "Labels":
      return <ReportIcon className="icon" />
    default:
      return <></>
  }
}

const ReportSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const bgColor = useCallback(() => {
    switch (selectedIndex) {
      case 0:
        return "rgb(240, 249, 255)"
      case 1:
        return "rgb(238, 242, 255)"
      case 2:
        return "rgb(240, 253, 250)"
      case 3:
        return "rgb(255, 241, 242)"

      default:
        return ""
    }
  }, [selectedIndex])

  return (
    <section className="pt-32 px-4">
      <div
        className="max-w-6xl mx-auto rounded-xl transition-colors overflow-hidden"
        style={{ backgroundColor: bgColor() }}
      >
        <div className="max-w-3xl p-8 pb-0">
          <h2 className="font-display tracking-tight text-4xl font-bold text-slate-700 sm:text-4xl">
            Be in charge of everything that comes before and after customer
            conversations
          </h2>
        </div>
        <div>
          <div className="mt-6">
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List className="px-8 flex overflow-x-auto">
                {categories.map((category) => (
                  <Tab as={Fragment} key={category.name}>
                    {({ selected }) => (
                      <div
                        style={
                          selected
                            ? { backgroundColor: category.color }
                            : undefined
                        }
                        className={classNames(
                          "px-4 py-2 rounded-lg mr-2 transition-all text-sm inline-flex items-center space-x-2 outline-none cursor-pointer",
                          selected
                            ? "text-white bg-[rgb(244, 63, 94)]"
                            : "text-slate-700"
                        )}
                      >
                        <ReportTabIconList tabName={category.name} />
                        <span>{category.name}</span>
                      </div>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-8 p-8 pt-0">
                {Object.values(categories).map((item) => (
                  <Tab.Panel key={item.title}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-2xl font-semibold">{item.title}</p>
                        <p className="text-slate-600">{item.description}</p>
                        <ul className="space-y-3">
                          {item.features.map((item) => (
                            <li
                              key={item}
                              className="flex items-center space-x-2"
                            >
                              <FilledCheckIcon className="icon h-5 w-5 text-woot" />
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Image
                          width={528}
                          height={330}
                          src={item.imageUrl}
                          className="rounded shadow-xl"
                          alt="Reports"
                        />
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportSection
