import Image from "next/image"

const LiveChatPreview = ({
  greetingMessage,
  comment,
  replyTime,
  widgetColor,
  widgetPosition,
  widgetType,
}: {
  greetingMessage: string
  comment: string
  replyTime: string
  widgetColor: string
  widgetPosition: boolean
  widgetType: boolean
}) => {
  return (
    <div>
      <div className="py-12 w-full sm:w-8/12 mx-auto">
        <div className="h-[500px] bg-slate-100/50 backdrop-blur rounded-xl shadow-2xl border overflow-hidden flex flex-col">
          <div className="bg-white/75 backdrop-blur-0 w-full py-8 px-6">
            <h2 className="text-3xl font-medium text-slate-700">
              {greetingMessage}
            </h2>
            <p className="text-slate-500 mt-4">{comment}</p>
          </div>
          <div className="flex-grow flex items-end py-8 px-6">
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 bg-green-400 inline-block rounded-full ring-2 ring-green-400/50"></span>
                    <p className="text-lg">We&lsquo;re online</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Typically replies {replyTime}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-300">
                  <Image
                    width={48}
                    height={48}
                    src="/images/home/avatar.webp"
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <button
                className="w-full py-2 px-4 rounded-lg text-white"
                style={{ backgroundColor: widgetColor }}
              >
                Start Conversation
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {widgetType ? (
            <div
              style={{ backgroundColor: widgetColor }}
              className={`${
                widgetPosition ? "mr-auto" : "ml-auto"
              } h-16 w-16 rounded-full shadow-2xl border flex items-center justify-center`}
            >
              <Image
                width={20}
                height={20}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg=="
                alt="chatwoot-logo"
                className="h-6 w-6"
              />
            </div>
          ) : (
            <div
              className={`max-w-max px-4 py-3 rounded-full flex items-center justify-center space-x-2 text-white ${
                widgetPosition ? "mr-auto" : "ml-auto"
              }`}
              style={{ backgroundColor: widgetColor }}
            >
              <Image
                width={20}
                height={20}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg=="
                alt="chatwoot-logo"
                className="h-5 w-5"
              />
              <span>Chat with us</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LiveChatPreview
