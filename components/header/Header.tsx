"use client"
import { useEffect, useState } from "react"
import HeaderRight from "./HeaderRight"
import Navigation from "./navigation/Navigation"

export default function Header() {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsScroll(true)
      if (window.scrollY === 0) setIsScroll(false)
    }
    handleWindowScroll()
    window.addEventListener("scroll", handleWindowScroll)
    return () => {
      window.removeEventListener("scroll", handleWindowScroll)
    }
  }, [])

  return (
    <header className="sticky w-full top-0 z-50">
      <nav
        className={
          isScroll
            ? "bg-opacity-95 shadow bg-white backdrop-blur firefox:bg-opacity-100 transition-all duration-700"
            : "bg-opacity-0 backdrop-blur firefox:bg-opacity-100 transition-all duration-700"
        }
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-0">
          <div className="lg:static z-50 flex justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
            <Navigation />
            <HeaderRight />
          </div>
        </div>
      </nav>
    </header>
  )
}
