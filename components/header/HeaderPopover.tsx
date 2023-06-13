import { Popover as HeadLessUIPopover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import ChevronDownIcon from "icons/ChevronDown";

export default function HeaderPopover({
  actionContent,
  panelContent,
  onClick,
}: {
  actionContent: ReactNode;
  panelContent: ReactNode;
  onClick?: () => void;
}) {
  return (
    <HeadLessUIPopover className="my-auto">
      {({ open }) => (
        <>
          <HeadLessUIPopover.Button
            onClick={onClick}
            className="rounded-lg py-1 px-2 text-base font-medium hover:bg-slate-100 focus:bg-slate-100 hover:text-slate-900 focus:text-slate-900 focus:outline-none flex items-center space-x-1 text-slate-700"
          >
            <span className="font-medium">{actionContent}</span>
            <ChevronDownIcon />
          </HeadLessUIPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <HeadLessUIPopover.Panel className="absolute left-0 z-20 mt-6 w-full transform px-4 sm:px-0">
              {panelContent}
            </HeadLessUIPopover.Panel>
          </Transition>
        </>
      )}
    </HeadLessUIPopover>
  );
}
