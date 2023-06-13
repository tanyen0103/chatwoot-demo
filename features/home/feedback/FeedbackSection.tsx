import Image from "next/image"
import CaseStudy from "./CaseStudy"
import FeedbackItem from "./FeedbackItem"
import FeedbackSectionWrapper from "./FeedbackSectionWrapper"

const feedbackListCol1 = [
  {
    id: 0,
    content: `"Chatwoot serves as a critical tool that helps us have real-time conversations with our donors and address questions in that not only drive conversation but donor satisfaction."`,
    name: "Adam Compton",
    avatar: "https://www.chatwoot.com/testimonials/adam-compton.png",
    jobTitle: "Executive Director of Annual Giving, NC State University",
  },
  {
    id: 1,
    content: `"Chatwoot is so much better than Zendesk."`,
    name: "Alexa Kayman",
    avatar: "https://www.chatwoot.com/testimonials/alexa-kayman.jpg",
    jobTitle: "Founding Growth Bloom",
  },
  {
    id: 2,
    content: `"Chatwoot is my current favorite open source project."`,
    name: "Miahael Asiedu",
    avatar: "https://www.chatwoot.com/testimonials/michael-asiedu.jpg",
    jobTitle: "",
  },
  {
    id: 3,
    content: `"What Discourse is to forums, Chatwoot is to chats. We’ve grown about 10X during our time with Chatwoot. Especially the chat widget makes it very easy to get feedback. I've used Intercom before this. We chose Chatwoot because of its feature set. Intercom is super expensive, and more of a marketing tool. We wanted a useful chat tool and found Chatwoot to be extremely helpful."`,
    name: "Tyler Warnock",
    avatar: "https://www.chatwoot.com/testimonials/tyler-warnock.jpg",
    jobTitle: "Cofounder & CEO Userfront",
  },
]

const feedbackListCol2 = [
  {
    id: 4,
    content: `"Chatwoot is great! Using them for our startup VideoTouch and I'm very satisfied! Great open source alternative of Intercom, Crisp, and other expensive chats for websites. 😎"`,
    name: "Andrey Novikov",
    jobTitle: "Marketing VideoTouch",
    avatar: "https://www.chatwoot.com/testimonials/andrey-novikov.jpg",
  },
  {
    id: 5,
    content: `"Just switched to Chatwoot from Intercom. Feels amazing. Save money + reply in Slack + just as sleek. Previously also used Tawkto (shabby) and HelloTalkApp (pricy)."`,
    name: "Cloakist",
    jobTitle: "",
    avatar: "https://www.chatwoot.com/testimonials/cloakist.jpg",
  },
  {
    id: 6,
    content: `"Installed @chatwootapp for customer support on @slashbaseide It's plain, simple and easy to use. Also, trying our @posthog for install analytics. Both are open source products. One open-source project for another. 💪#buildinpublic"`,
    name: "Paras Waykole",
    jobTitle: "Marketing VideoTouch",
    avatar: "https://www.chatwoot.com/testimonials/paras-waykole.jpg",
  },
]

const feedbackListCol3 = [
  {
    id: 7,
    content: `"I'm totally in love with Chatwoot. Customer service is uniformly awful without the right tools helping experts exceed expectations. This open source system doesn't just rival the likes of Zendesk. It trumps them - easily."`,
    name: "Dave Thackeray",
    jobTitle: "",
    avatar: "https://www.chatwoot.com/testimonials/dave-thackeray.jpg",
  },
  {
    id: 8,
    content: `"Chatwoot has worked very well for our use case. The new features are just added advantages; it was working for us perfectly from the first version itself. It always solves the problem for us perfectly. No complaints."`,
    name: "Jaime Rivas",
    jobTitle: "CEO Synergy Inc.",
    avatar: "https://www.chatwoot.com/testimonials/jaime-rivas.jpg",
  },
]

const feedbackListCol4 = [
  {
    id: 9,
    content: `"I love Chatwoot for creating an open-source customer engagement tool 🤯. Open source is really helping businesses thrive for free. Respect."`,
    name: "Lewis Manelaws",
    jobTitle: "",
    avatar: "https://www.chatwoot.com/testimonials/lewis-manelaws.jpg",
  },
  {
    id: 10,
    content: `"Open-source omnichannel customer support rails app that kicks ass. Setting it up was pretty easy; there's a docker-compose.yaml."`,
    name: "Martijn Smit",
    jobTitle: "Founder and creator WhatPulse",
    avatar: "https://www.chatwoot.com/testimonials/martijn-smit.jpg",
  },
  {
    id: 11,
    content: `"We embedded Chatwoot live chat on our website and web app. Whenever people are stuck using our software, they can quickly reach out and we can quickly help them. Moreover, we can see where these customers are currently – the website or the web app. Also, being able to upload images and exchange information is very useful. Having persistent chat history is also very helpful, as I can pick up any conversation again."`,
    name: "Michael Elias",
    jobTitle: "Founder Loopz",
    avatar: "https://www.chatwoot.com/testimonials/michael-elias.jpg",
  },
]

const FeedbackSection = () => {
  return (
    <FeedbackSectionWrapper>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-woot-darker">
          We put your needs first. That is what keeps us going.
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Loved by small and big teams, alike
        </p>
      </div>

      <CaseStudy className="mt-12 -mb-8 block sm:hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5" />

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <CaseStudy className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1" />
        <div className="space-y-8 xl:contents xl:space-y-0">
          <div className="xl:row-span-2 space-y-8">
            {feedbackListCol1.map((item) => (
              <FeedbackItem key={item.id} item={item} />
            ))}
          </div>
          <div className="xl:row-start-1 space-y-8">
            {feedbackListCol2.map((item) => (
              <figure
                key={item.id}
                className="rounded-2xl bg-white/50 hover:bg-white transition-colors duration-300 backdrop-blur p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-600">
                  <p>{item.content}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    height="40"
                    width="40"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    {item.jobTitle && (
                      <div className="text-gray-600">
                        <span>{item.jobTitle}</span>
                      </div>
                    )}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="space-y-8 xl:contents xl:space-y-0">
          <div className="xl:row-start-1 space-y-8">
            {feedbackListCol3.map((item) => (
              <FeedbackItem key={item.id} item={item} />
            ))}
          </div>
          <div className="xl:row-span-2 space-y-8">
            {feedbackListCol4.map((item) => (
              <FeedbackItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </FeedbackSectionWrapper>
  )
}

export default FeedbackSection
