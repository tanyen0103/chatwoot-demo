

const KeyboardActions = () => {
  return (
    <div className="col-span-8 md:col-span-3 bg-gradient-to-br from-slate-100 to-slate-200 feature-card relative feature-card">
      <div className="h-56">
        <div className="absolute -left-12 xs:left-22 -md: top-3.5">
          <div className="h-64 overflow-hidden space-y-2 flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>F</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>G</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>H</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>J</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none highlighted rounded-lg flex flex-col items-center justify-center">
                <span>K</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>L</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>:</span>
                <span>;</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>&ldquo;</span>
                <span>&lsquo;</span>
              </button>
              <button className="h-16 w-28 key focus:outline-none rounded-lg flex items-end justify-end pr-2 pb-1">
                <span>return</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>V</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>B</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>N</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>M</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>&lt;</span>
                <span>,</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>&gt;</span>
                <span>.</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-center justify-center">
                <span>?</span>
                <span>/</span>
              </button>
              <button className="h-16 w-36 key focus:outline-none rounded-lg flex items-end justify-end pr-2 pb-1">
                <span>shift</span>
              </button>
            </div>
            <div className="flex items-end space-x-2">
              <button
                className="h-16 w-64 key focus:outline-none rounded-lg flex flex-col items-center justify-center"
                aria-label="space"
              ></button>
              <button className="h-16 w-24 key focus:outline-none highlighted rounded-lg flex flex-col items-start pl-2 justify-center">
                <span>⌘</span>
                <span>command</span>
              </button>
              <button className="h-16 w-16 key focus:outline-none rounded-lg flex flex-col items-start pl-2 justify-center">
                <span>⌥</span>
                <span>option</span>
              </button>
              <button className="h-8 w-16 key focus:outline-none rounded-lg flex items-end justify-end pr-2 pb-1">
                <span>◄</span>
              </button>
              <div className="h-16 grid grid-row-2">
                <button className="h-8 w-16 key focus:outline-none rounded-lg flex items-end justify-end pr-2 pb-1">
                  <span>▲</span>
                </button>
                <button className="h-8 w-16 key focus:outline-none rounded-lg flex items-end justify-end pr-2 pb-1">
                  <span>▼</span>
                </button>
              </div>
              <button className="h-8 w-16 key focus:outline-none rounded-lg flex items-end justify-end pr-2 pb-1">
                <span>▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h2 className="text-slate-800 text-2xl font-semibold">
          Swiftly run actions with your keyboard
        </h2>
        <p className="text-slate-500 mt-4 text-lg">
          Perform your regular actions like resolving a conversation or snoozing
          it until the next reply.
        </p>
        <button className="bg-slate-900 w-full block py-3 rounded-lg text-white">
          Hit cmd/ctrl + K to access
        </button>
      </div>
    </div>
  )
}

export default KeyboardActions
