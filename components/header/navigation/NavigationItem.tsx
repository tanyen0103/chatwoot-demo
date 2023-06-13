"use client";
import { useState } from "react";
import { MenuItemType } from "constants/Menu";
import {
  MenuItem,
  MenuMenuItem,
  NewsMenuItem as NewsMenuItemType,
} from "types/Menu";
import FeaturePanel from "./menu/FeaturePanel";
import NewsMenuPanel from "./newsmenu/NewsMenuPanel";
import HeaderPopover from "components/header/HeaderPopover";

export default function NavigationItem(menuItem: MenuItem) {
  const [activeId, setActiveId] = useState(1);
  const [hideSubfeature, setHideSubfeature] = useState(false);
  const [isSubFeatureAppear, setIsSubFeatureAppear] = useState(false);

  const handleClickPopover = () => {
    if (isSubFeatureAppear) setIsSubFeatureAppear(false);
  };

  const handleMenuItemClick = (item: MenuMenuItem) => {
    if (!isSubFeatureAppear) setIsSubFeatureAppear(true);
    if (activeId === item.id) return;
    
    setHideSubfeature(true);
    setTimeout(() => {
      setHideSubfeature(false);
      setActiveId(item.id);
    }, 300);
  };

  switch (menuItem.type) {
    case MenuItemType.FEATURES:
      let categoryItemList: MenuMenuItem[] = [];
      if (Array.isArray(menuItem.children))
        categoryItemList = menuItem.children;

      return (
        <HeaderPopover
          onClick={handleClickPopover}
          actionContent="Features"
          panelContent={
            <FeaturePanel
              {...{
                categoryItemList,
                handleMenuItemClick,
                activeId,
                hideSubfeature,
                isSubFeatureAppear,
              }}
            />
          }
        />
      );

    case MenuItemType.RESOURCES:
      let news: NewsMenuItemType = {
        categories: [],
        news: [],
      };
      if (!Array.isArray(menuItem.children)) news = menuItem.children;

      return (
        <HeaderPopover
          actionContent="Resources"
          panelContent={<NewsMenuPanel news={news} />}
        />
      );

    default:
      return (
        <a
          href={menuItem.href}
          className="router-link-active router-link-exact-active navbar-link text-slate-700"
        >
          <span>{menuItem.name}</span>
        </a>
      );
  }
}
