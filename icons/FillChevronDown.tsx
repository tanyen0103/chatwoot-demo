const FillChevronDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Zm8.854-.646l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L8 8.793l2.146-2.147a.5.5 0 0 1 .708.708Z"
      ></path>
    </svg>
  )
}

export default FillChevronDownIcon
