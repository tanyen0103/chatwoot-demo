;

const SmallCircleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1026 1026"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
        stroke="#313F55"
        strokeOpacity="0.7"
      ></path>
      <path
        d="M913 513c0 220.914-179.086 400-400 400"
        stroke="url(#:R65m:-gradient-2)"
        strokeLinecap="round"
      ></path>
      <defs>
        <linearGradient
          id=":R65m:-gradient-2"
          x1="913"
          y1="513"
          x2="913"
          y2="913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06b6d4"></stop>
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SmallCircleIcon;
