const ContributingIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M224 64a32 32 0 1 0-40 31v9a16 16 0 0 1-16 16H96a31.71 31.71 0 0 0-16 4.31V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-9a16 16 0 0 1 16-16h72a32 32 0 0 0 32-32v-9a32.06 32.06 0 0 0 24-31ZM56 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16ZM192 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"
      ></path>
    </svg>
  )
}

export default ContributingIcon
