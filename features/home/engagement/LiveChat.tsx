"use client"
import { useState } from "react"
import LiveChatWrapper from "./LiveChatWrapper"
import LiveChatPreview from "./LiveChatPreview"
import LiveChatConfigForm from "./LiveChatConfigForm"

const LiveChat = () => {
  const [greetingMessage, setGreetingMessage] =
    useState<string>("Hello there 👋")
  const [comment, setComment] = useState<string>(
    "We are here to help you with your questions. Ask us anything, or share your feedback."
  )
  const [replyTime, setReplyTime] = useState<string>("a few minutes")
  const [widgetColor, setWidgetColor] = useState<string>("#1F93FF")
  const [widgetPosition, setWidgetPosition] = useState<boolean>(false)
  const [widgetType, setWidgetType] = useState<boolean>(true)

  return (
    <LiveChatWrapper>
      <LiveChatConfigForm
        {...{
          greetingMessage,
          setGreetingMessage,
          comment,
          setComment,
          replyTime,
          setReplyTime,
          widgetColor,
          setWidgetColor,
          widgetPosition,
          setWidgetPosition,
          widgetType,
          setWidgetType,
        }}
      />
      <LiveChatPreview
        {...{ greetingMessage, comment, replyTime, widgetColor, widgetPosition, widgetType }}
      />
    </LiveChatWrapper>
  )
}

export default LiveChat
