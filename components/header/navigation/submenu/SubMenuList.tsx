"use client"
import { SubMenuMenuItem } from "../../../../types/Menu";
import { SubMenuListItem } from "./SubMenuListItem";

export const SubMenuList = ({
  subMenuItemList,
  hideSubfeature,
  isSubFeatureAppear,
}: {
  subMenuItemList?: SubMenuMenuItem[];
  hideSubfeature: boolean;
  isSubFeatureAppear: boolean;
}) => {
  return (
      <div className="grid grid-cols-3 gap-6 relative">
        {subMenuItemList?.map((item) => (
          <SubMenuListItem
            key={item.name}
            {...{
              ...item,
              hideSubfeature,
              isSubFeatureAppear,
            }}
          />
        ))}
      </div>
  );
};
