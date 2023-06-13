"use client"
import { NewsMenuMenuItem } from "../../../../types/Menu";

export const NewsMenuItem = (item: NewsMenuMenuItem) => {
  return (
    <div key={item.id} className="py-6">
      <p className="text-sm text-woot font-medium ml-3">
        {item.name}
      </p>
      <ul className="mt-4 space-y-4">
        {item.children.map((subItem) => (
          <li key={subItem.name}>
            <a
              href="/blog"
              className="p-3 block rounded transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-woot focus-visible:ring-opacity-50"
            >
              <div className="relative">
                <dt>
                  {subItem.icon}
                  <p className="ml-9 leading-6 font-semibold text-gray-900">
                    {subItem.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-sm text-gray-500">
                  {subItem.description}
                </dd>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
