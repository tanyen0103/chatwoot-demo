import AutoMateTasksImage from "icons/AutoMateTasksImage"
import BotIcon from "icons/Bot"
import PlayIcon from "icons/Play"
import Image from "next/image"

import LiveChat from "./engagement/LiveChat"
import DashboardApps from "./engagement/DashboardApps"
import Chatbot from "./engagement/Chatbot"
import AutomateTasks from "./engagement/AutomateTasks"
import TeamCollaboration from "./engagement/TeamCollaboration"
import KeyboardActions from "./engagement/KeyboardActions"
import CannedResponsese from "./engagement/CannedResponsese"

const CustomerEngagementSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-5xl font-extrabold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-woot to-violet-500">
              Customer engagement made easy
            </span>
          </h2>
          <p className="text-3xl text-center font-medium mt-4 max-w-4xl mx-auto text-slate-800 leading-10">
            Chatwoot enables your team to be more productive, faster, and
            collaborate without switching apps.
          </p>
        </div>
        <div className="mt-8 space-y-8">
          <div className="grid grid-cols-8 gap-8">
            <CannedResponsese />
            <KeyboardActions />
          </div>
          <div className="grid grid-cols-8 gap-8">
            <TeamCollaboration />
            <AutomateTasks />
          </div>
          <div className="grid grid-cols-8 gap-8">
            <Chatbot />
            <DashboardApps />
          </div>
          <LiveChat />
        </div>
        <a
          href="/features"
          className="mx-auto mt-8 px-6 py-3 bg-woot-dark text-white rounded-lg max-w-max block"
        >
          Check out all the features
        </a>
      </div>
    </section>
  )
}

export default CustomerEngagementSection
