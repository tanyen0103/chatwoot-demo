"use client";
import Image from "next/image";
import { MenuMenuItem } from "../../../../types/Menu";

export const MenuListItem = ({
  item,
  onClick,
  activeId,
}: {
  item: MenuMenuItem;
  onClick: () => void;
  activeId: number;
}) => {
  return (
    <a
      href={item.href}
      className={`text-left flex items-start rounded-lg p-3 transition duration-200 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-woot focus-visible:ring-opacity-50 cursor-pointer ${
        activeId === item.id ? "bg-gray-50" : "grayscale"
      }`}
      onClick={onClick}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
        {item.icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </a>
  );
};
