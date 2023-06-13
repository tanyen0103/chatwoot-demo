

const CannedResponsese = () => {
  return (
    <div className="col-span-8 md:col-span-5 bg-gradient-to-br from-rose-500 to-purple-600 flex flex-col justify-between feature-card">
      <div className="p-8">
        <h2 className="text-white text-3xl font-semibold">Canned Responses</h2>
        <p className="text-white/80 text-lg font-medium max-w-sm mt-4">
          Reply to frequently asked questions, using canned responses.
        </p>
      </div>
      <div className="p-8">
        <div className="h-52 flex flex-col space-y-4 w-full mb-4 overflow-y-auto">
          <div className="flex items-end space-x-2 mt-auto">
            <div className="h-8 w-8 bg-white/60 backdrop-blur border-gray-300 shadow rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon text-slate-600 h-4 w-4"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.918a2.75 2.75 0 0 1-.512 1.598c-1.546 2.164-4.07 3.235-7.49 3.235c-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.249 2.249 0 0 1 6.253 14h11.502ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"
                ></path>
              </svg>
            </div>
            <div className="max-w-max font-di rounded-t-2xl rounded-r-2xl bg-white/60 backdrop-blur border-gray-300 shadow p-4 text-slate-600 text-sm font-semibold">
              <p>I need help on how to use canned responses!</p>
            </div>
          </div>
          <ul className="space-y-4">
            <li>
              <div className="max-w-max rounded-t-2xl rounded-l-2xl bg-white/60 backdrop-blur border-gray-300 shadow p-4 text-slate-600 text-sm font-semibold ml-auto">
                <p>Use / to search canned responses below.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Click here, enter / and see how canned responses work"
            className="form-input canned-responses-input"
          />
        </div>
      </div>
    </div>
  )
}

export default CannedResponsese
