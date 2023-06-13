"use client"
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SubMenuMenuItem } from "../../../../types/Menu";

export const SubMenuListItem = (
  item: SubMenuMenuItem & {
    isSubFeatureAppear: boolean;
    hideSubfeature: boolean;
  }
) => {
  return (
    <Transition
      key={item.name}
      as={Fragment}
      appear={item.isSubFeatureAppear}
      show={!item.hideSubfeature}
      enter="transition transform duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition transform duration-300"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <a
        href={item.link}
        className="relative hover:bg-slate-50 p-3 rounded-lg flex flex-col cursor-pointer"
      >
        <div className="flex-grow">
          <dt>
            {item.icon}
            <p className="ml-9 text-base leading-6 font-semibold text-gray-800">
              {item.name}
            </p>
          </dt>
          <dd className="mt-2 ml-9 text-sm tracking text-gray-500">
            <p>{item.description}</p>
          </dd>
        </div>
        <p className="ml-9 text-xs text-gray-400 mt-4">
          {" "}
          Learn More →{" "}
        </p>
      </a>
    </Transition>
  );
};
