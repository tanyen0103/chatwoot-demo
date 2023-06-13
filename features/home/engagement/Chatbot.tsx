"use client"
import PlayIcon from "icons/Play"
import { useCallback, useEffect, useRef, useState } from "react"
import MessageItem from "./MessageItem"

const messageList = [
  "Hi! How can I help you?",
  "Where‘s my order?",
  "Can I get the order number?",
  "Sure, it‘s 8119237",
  "Your order is on its way!",
]

const Chatbot = () => {
  const [animationList, setAnimationList] = useState<string[]>([])
  const [animationFinished, setAnimationFinished] = useState(false)
  const [keyPrefix, setKeyPrefix] = useState(Date.now())
  const chatbotRef = useRef<HTMLDivElement>(null)
  const [firstTime, setFirstTime] = useState(true)

  const onLoaded = (index: number) => {
    if (index >= messageList.length - 1) setAnimationFinished(true)
    else {
      setAnimationFinished(false)
      setAnimationList((prev) => [...prev, messageList[index + 1]])
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const chatbotPosition = chatbotRef.current?.getBoundingClientRect()
      if (chatbotPosition && chatbotPosition.top <= window.innerHeight) {
        if (firstTime) {
          setAnimationList([messageList[0]])
          setFirstTime(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [firstTime])

  return (
    <div
      ref={chatbotRef}
      className="col-span-8 min-h-[24rem] sm:col-span-4 bg-gradient-3 relative p-8 feature-card"
    >
      <div>
        <h2 className="text-white text-3xl font-semibold">
          Chatbot to the rescue!
        </h2>
        {!firstTime && <button
          className="bg-white/50 rounded-full h-8 w-8 flex items-center justify-center absolute top-8 right-8"
          onClick={() => {
            if (animationList.length === 0 || animationFinished) {
              setAnimationList([messageList[0]])
              setKeyPrefix(Date.now())
            }
          }}
        >
          <PlayIcon className="icon text-slate-700/50 h-4 w-4" />
        </button>}
      </div>
      <ul className="space-y-4 mt-4 relative">
        {animationList.map((item, index) => (
          <MessageItem key={keyPrefix + item} {...{ item, index, onLoaded }} />
        ))}
      </ul>
    </div>
  )
}

export default Chatbot
