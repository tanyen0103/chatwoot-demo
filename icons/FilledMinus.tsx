import React from "react"

const FilledMinus = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M2 9.75A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
      ></path>
    </svg>
  )
}

export default FilledMinus
