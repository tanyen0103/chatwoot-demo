;
import MenuList from "./MenuList";
import { SubMenuList } from "../submenu/SubMenuList";
import { MenuMenuItem } from "../../../../types/Menu";

const FeaturePanel = ({
  categoryItemList,
  activeId,
  handleMenuItemClick,
  hideSubfeature,
  isSubFeatureAppear,
}: {
  categoryItemList: MenuMenuItem[];
  activeId: number;
  handleMenuItemClick: (item: MenuMenuItem) => void;
  hideSubfeature: boolean;
  isSubFeatureAppear: boolean;
}) => {
  const subMenuItemList = categoryItemList.find(
    (x) => x.id === activeId
  )?.children;
  
  return (
    <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
      <div className="mx-auto max-w-7xl z-20 relative">
        <div className="py-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2 pr-8 border-r">
              <MenuList
                {...{
                  categoryItemList,
                  handleMenuItemClick,
                  activeId,
                }}
              />
            </div>
            <div className="col-span-3">
              <SubMenuList
                {...{ subMenuItemList, hideSubfeature, isSubFeatureAppear }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePanel;
