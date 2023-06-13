import { Transition } from "@headlessui/react"
import BotIcon from "icons/Bot"
import MessageTyping from "icons/MessageTyping"
import { Fragment, useEffect, useState } from "react"

const MessageItem = ({
  item,
  index,
  onLoaded,
}: {
  item: any
  index: number
  onLoaded: (index: number) => void
}) => {
  const [play, setPlay] = useState(false)
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    setPlay(true)
  }, [])

  useEffect(() => {
    if (play)
      setTimeout(() => {
        setPlay(false)
      }, 2000)
  }, [play])

  return (
    <li>
      <div
        className={`flex items-end space-x-2 relative ${
          index % 2 === 0 ? "" : "justify-end"
        }`}
      >
        {index % 2 === 0 && (
          <div className="h-8 w-8 bg-white/80 backdrop-blur border-gray-300 shadow rounded-full flex items-center justify-center">
            <BotIcon className="icon text-slate-600 h-4 w-4" />
          </div>
        )}
        <Transition
          as={Fragment}
          appear
          show={played}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          afterEnter={() => onLoaded(index)}
        >
          <div className="max-w-max scel rounded-t-2xl rounded-r-2xl bg-white/60 backdrop-blur border-gray-300 shadow p-3 text-slate-600 text-sm font-medium relative">
            <p>{item}</p>
          </div>
        </Transition>
        <Transition
          as={Fragment}
          show={play}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => {
            setPlay(false)
            setPlayed(true)
          }}
        >
          <div>
            <MessageTyping />
          </div>
        </Transition>
      </div>
    </li>
  )
}

export default MessageItem
