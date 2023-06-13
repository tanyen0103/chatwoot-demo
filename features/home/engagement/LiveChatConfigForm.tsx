import  { Dispatch, SetStateAction } from "react"

const LiveChatConfigForm = ({
  greetingMessage,
  setGreetingMessage,
  comment,
  setComment,
  setReplyTime,
  widgetColor,
  setWidgetColor,
  widgetPosition,
  setWidgetPosition,
  widgetType,
  setWidgetType,
}: {
  greetingMessage: string
  setGreetingMessage: Dispatch<SetStateAction<string>>
  comment: string
  setComment: Dispatch<SetStateAction<string>>
  setReplyTime: Dispatch<SetStateAction<string>>
  widgetColor: string
  setWidgetColor: Dispatch<SetStateAction<string>>
  widgetPosition: boolean
  setWidgetPosition: Dispatch<SetStateAction<boolean>>
  widgetType: boolean
  setWidgetType: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        A live chat that fits your brand
      </h2>
      <p className="max-w-lg my-4 text-slate-600">
        Engage with your website visitors in real time. Add a live chat widget
        to your website that complements your brand.
      </p>
      <div className="">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-500 font-medium text-sm">
              Greeting Message
            </span>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
              value={greetingMessage}
              onChange={(e) => setGreetingMessage(e.target.value)}
            />
          </label>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Welcome tagline
            </label>
            <div className="mt-1">
              <textarea
                name="comment"
                id="comment"
                className="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <label className="block">
            <span className="text-gray-500 font-medium text-sm">
              Reply Time
            </span>
            <select
              className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setReplyTime(e.target.value)}
            >
              <option value="a few minutes">In a few minutes</option>
              <option value="a few hours">In a few hours</option>
              <option value="a day">In a day</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-500 font-medium text-sm">
              Widget Color
            </span>
            <input
              type="color"
              className="appearance-none bg-none form-input block w-full lg:w-1/6 mt-1 h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={widgetColor}
              onChange={(e) => setWidgetColor(e.target.value)}
            />
          </label>
          <div>
            <p className="text-gray-500 font-medium text-sm">
              Widget Bubble position
            </p>
            <div className="flex items-center mt-1 max-w-max bg-white rounded-md overflow-hidden border">
              <button
                className={`${
                  widgetPosition ? "bg-woot-dark text-white " : ""
                } shadow-sm px-4 py-2 rounded-l-md focus:outline-none`}
                onClick={() => setWidgetPosition(true)}
              >
                Left
              </button>
              <button
                className={`${
                  widgetPosition ? "" : "bg-woot-dark text-white "
                } shadow-sm px-4 py-2 rounded-r-md focus:outline-none`}
                onClick={() => setWidgetPosition(false)}
              >
                Right
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-500 font-medium text-sm">
              Widget Bubble type
            </p>
            <div className="flex items-center mt-1 max-w-max bg-white rounded-md overflow-hidden border">
              <button
                className={`${
                  widgetType ? "bg-woot-dark text-white" : ""
                } shadow-sm px-4 py-2 focus:outline-none`}
                onClick={() => setWidgetType(true)}
              >
                Standard
              </button>
              <button
                className={`${
                  widgetType ? "" : "bg-woot-dark text-white"
                } shadow-sm px-4 py-2 focus:outline-none`}
                onClick={() => setWidgetType(false)}
              >
                Expanded
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChatConfigForm
