"use client"
import Image from "next/image";
;
import { SubMenuMenuItem } from "../../../../types/Menu";

export const NewsItem = (newsItem: SubMenuMenuItem) => {
  return (
    <>
      <div key={newsItem.name}>
        <a href={newsItem.link} className="router-link-active router-link-exact-active w-full grid grid-cols-3 gap-4">
          <Image
            src={typeof newsItem.icon === "string" ? newsItem.icon : ""}
            alt={newsItem.name}
            width={170}
            height={114}
            className="h-full w-full rounded-lg object-cover border"
          />
          <div className="col-span-2">
            <p className="font-semibold text-slate-700">
              {newsItem.name}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              {newsItem.description}
            </p>
            <div className="flex-space-x-2 text-woot text-sm mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon h-5 w-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.856 8.155A1.25 1.25 0 0 0 9 9.248v5.504a1.25 1.25 0 0 0 1.856 1.093l5.757-3.189a.75.75 0 0 0 0-1.312l-5.757-3.189ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0Z"
                ></path>
              </svg>
              <span>Watch video</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
