"use client";
import { MenuMenuItem } from "../../../../types/Menu";
import { MenuListItem } from "./MenuListItem";

export default function MenuList({
  categoryItemList,
  activeId,
  handleMenuItemClick,
}: {
  categoryItemList: MenuMenuItem[];
  activeId: number;
  handleMenuItemClick: (item: MenuMenuItem) => void;
}) {
  return (
    <>
      {categoryItemList.map((item) => (
        <MenuListItem
          key={item.name}
          item={item}
          activeId={activeId}
          onClick={() => handleMenuItemClick(item)}
        />
      ))}
    </>
  );
}
