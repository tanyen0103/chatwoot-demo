const faqList = [
  {key: '/features/chatbots', content: "How do I automate conversations with chatbots?"},
  {key: '/features/branding', content: "Can I customise Chatwoot branding?"},
  {key: '/features/operations', content: "How can I extend Chatwoot for back-office operations?"},
  {key: '/features/chatbot-integrate', content: "How can I integrate Chatwoot with Dialogflow?"},
  {key: '/features/channel', content: "How can I configure IMAP in an Email channel?"},
]

const HelpCenterFAQ = () => {
  return (
    <div className="mt-8 p-12 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto divide-y-2 divide-slate-100">
        <h2 className="text-center text-3xl font-bold py-8 tracking-tight text-slate-800 sm:text-4xl">
          Frequently asked questions
        </h2>
        {faqList.map((item) => (
          <dl
            key={item.key}
            className="space-y-2 divide-y divide-slate-50 cursor-pointer"
          >
            <div className="py-6">
              <dd className="flex flex-row justify-between" id="faq-0">
                <a
                  href={item.key}
                  className="text-lg self-center cursor: pointer font-medium text-slate-700 hover:text-blue-500"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  {item.content}
                </a>
                <div className="p-1 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon text-slate-500 h-5 w-5 absolute flex items-center hover:text-blue-500"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h14v-6q0-.425.288-.713T20 12q.425 0 .713.288T21 13v6q0 .825-.588 1.413T19 21H5Zm4-6q-.275-.275-.275-.7T9 13.6L17.6 5H15q-.425 0-.713-.288T14 4q0-.425.288-.713T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10q-.425 0-.713-.288T19 9V6.4l-8.625 8.625q-.275.275-.675.275T9 15Z"
                    ></path>
                  </svg>
                </div>
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </div>
  )
}

export default HelpCenterFAQ
