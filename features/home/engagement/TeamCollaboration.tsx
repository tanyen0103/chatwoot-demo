

const TeamCollaboration = () => {
  return (
    <div className="col-span-8 md:col-span-3 bg-gradient-to-br from-rose-500 to-orange-500 relative overflow-hidden feature-card">
      <div className="p-8">
        <h2 className="text-white text-3xl font-semibold">
          Team Collaboration
        </h2>
        <p className="text-white/80 text-lg font-medium max-w-sm mt-4">
          Communicate with your teammates without leaving Chatwoot. Simply, use
          private notes to mention your colleagues and chat with them about your
          customer conversations.
        </p>
      </div>
      <div
        className="bg-white/50 backdrop-blur w-full rounded-lg"
        style={{ transform: "translate(32px, -20px)" }}
      >
        <div className="flex items-center space-x-2 text-sm">
          <div className="px-4 py-2 text-slate-500">Reply</div>
          <div className="px-4 py-2 bg-gray-600/20 text-slate-700 font-medium">
            Private Note
          </div>
        </div>
        <p className="text-gray-600 text-sm p-4 border-t border-gray-400/50">
          <span className="p-1 bg-woot/80 text-white rounded">@Ivan Pedro</span>{" "}
          Can you please take a look at this one?
        </p>
        <div className="px-4 pb-4 flex items-center space-x-3">
          <button
            className="h-8 w-8 rounded-lg bg-gray-600/20 text-slate-700 flex items-center justify-center"
            aria-label="Emojis"
          >
            <span>🙂</span>
          </button>
          <button
            className="h-8 w-8 rounded-lg bg-gray-600/20 text-slate-700 flex items-center justify-center"
            aria-label="Attachment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="icon h-4 w-4"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.772 3.744a6 6 0 0 1 8.66 8.302l-.189.197l-8.8 8.798l-.036.03a3.723 3.723 0 0 1-5.49-4.973a.76.76 0 0 1 .085-.13l.054-.06l.087-.088l.141-.148l.003.003l7.436-7.454a.75.75 0 0 1 .976-.074l.084.073a.75.75 0 0 1 .074.976l-.072.084l-7.595 7.613A2.23 2.23 0 0 0 10.364 20l8.833-8.83a4.502 4.502 0 0 0-6.198-6.524l-.168.16l-.012.014l-9.537 9.536a.75.75 0 0 1-1.133-.977l.073-.084l9.549-9.55h.001Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeamCollaboration
