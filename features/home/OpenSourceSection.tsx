import GithubIcon from "icons/Github";
;

const OpenSourceSection = () => {
  return (
    <section className="overflow-hidden relative py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 pb-12 relative z-20">
        <h2 className="text-4xl font-bold text-slate-700">
          {" "}
          And, we are open-source.{" "}
        </h2>
        <div className="w-full sm:w-1/2">
          <p className="text-lg text-gray-600 mt-6">
            {" "}
            Host Chatwoot on your server. Be the owner of your customer data and
            never miss any regulatory compliance.{" "}
          </p>
          <a
            href="https://github.com/chatwoot/chatwoot"
            className="bg-black text-white font-display font-medium px-4 py-2 rounded-md inline-flex items-center space-x-3 mt-6"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="icon h-6 w-6"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              ></path>
            </svg> */}
            <GithubIcon className="icon h-6 w-6" />
            <span>Check us on GitHub</span>
          </a>
        </div>
      </div>
      <div className="pt-12 pb-8 relative z-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <div className="w-full sm:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-700">
              <div>
                <p className="text-4xl font-bold">15k+</p>
                <p className="text-lg">Stars</p>
              </div>
              <div>
                <p className="text-4xl font-bold">3k+</p>
                <p className="text-lg">PRs Closed</p>
              </div>
              <div>
                <p className="text-4xl font-bold">240+</p>
                <p className="text-lg">Contributors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grain"></div>
      <div className="absolute left-0 right-0 bottom-0 flex items-end justify-start flex-nowrap flex-row w-full z-10">
        <div className="flex-grow h-[1px] border-line w-[48%] sm:w-[46%] absolute left-0"></div>
        <div className="graph ml-auto">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 960 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible block align-middle"
          >
            <path
              d="M178.507 305.111C131.659 323.63 100.966 315.481 66.2333 315.481C31.501 315.481 31 320 0 320H960V10H863.5C841.291 10 824.689 80.111 811.765 79.185C798.842 78.2591 793.995 63.658 785.918 64.3702C772.187 65.581 760.878 119.778 738.262 138.444C729.132 145.98 720.124 136.093 712.415 144C697.068 159.741 700.299 184.741 691.414 192.148C682.529 199.555 677.683 191.222 665.567 195.852C653.451 200.481 652.643 206.037 642.143 211.592C631.642 217.148 630.027 215.296 616.295 225.481C602.564 235.667 600.141 247.704 588.025 247.704C575.909 247.704 573.486 225.481 560.562 225.481C547.639 225.481 537.946 269.926 487.867 269.926C475.751 269.926 475.751 254.905 465.25 249.555C457.981 245.852 452.327 246.778 441.018 246.778C429.71 246.778 426.479 271.778 413.556 271.778C400.632 271.778 398.209 256.037 389.324 256.037C382.055 256.037 380.439 267.148 364.285 277.333C356.662 282.139 337.63 277.333 319.86 277.333C302.09 277.333 305.32 300.481 291.589 300.481C277.858 300.481 272.204 287.518 261.703 287.518C243.933 287.518 231.817 304.988 218.086 306.037C193.854 307.889 193.51 299.181 178.507 305.111Z"
              fill="url(#gradient-fill-chart)"
            ></path>
            <path
              d="M0 319.5C31 319.5 44.5923 315.481 66.2333 315.481C100.966 315.481 131.659 323.63 178.507 305.111C193.51 299.181 193.854 307.889 218.086 306.037C231.817 304.988 243.933 287.518 261.703 287.518C272.204 287.518 277.858 300.481 291.589 300.481C305.32 300.481 302.09 277.333 319.86 277.333C337.63 277.333 356.662 282.139 364.285 277.333C380.439 267.148 382.055 256.037 389.324 256.037C398.209 256.037 400.632 271.778 413.556 271.778C426.48 271.778 429.71 246.778 441.018 246.778C452.327 246.778 457.981 245.852 465.25 249.555C475.751 254.905 475.751 269.926 487.867 269.926C537.946 269.926 547.639 225.481 560.562 225.481C573.486 225.481 575.909 247.704 588.025 247.704C600.141 247.704 602.564 235.667 616.295 225.481C630.027 215.296 631.642 217.148 642.143 211.592C652.643 206.037 653.451 200.481 665.567 195.852C677.683 191.222 682.529 199.555 691.414 192.148C700.299 184.741 697.068 159.741 712.415 144C720.124 136.093 729.132 145.98 738.262 138.444C760.878 119.778 772.187 65.581 785.918 64.3702C793.995 63.658 798.842 78.2591 811.765 79.185C824.689 80.111 841.291 10 863.5 10"
              stroke="url(#gradient-line)"
              vectorEffect="non-scaling-stroke"
              strokeWidth="1"
            ></path>
            <line
              x1="862"
              y1="10"
              x2="862.01"
              y2="10"
              vectorEffect="non-scaling-stroke"
              stroke="#d7dbdf"
              strokeLinecap="round"
              strokeWidth="8"
            ></line>
            <defs>
              <linearGradient
                id="gradient-fill-chart"
                x1="960"
                y1="10"
                x2="960"
                y2="319"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#FFFFFF00"></stop>
                <stop offset="0.7" stopColor="#FFFFFF"></stop>
              </linearGradient>
              <linearGradient
                id="gradient-line"
                x1="73"
                y1="320"
                x2="900"
                y2="359.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#c7ebe5"></stop>
                <stop offset="1" stopColor="#d7dbdf"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
