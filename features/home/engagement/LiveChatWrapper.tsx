import { ReactNode } from "react"

const LiveChatWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="feature-card gradient feature-card">
      <div className="relative">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-[center 0px] grid-mask"></div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChatWrapper
