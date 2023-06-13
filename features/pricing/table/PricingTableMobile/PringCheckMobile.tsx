// import Image from 'next/image';
import React from "react";
import CheckIcon from "icons/Check";
import FilledMinus from "icons/FilledMinus";

// import Checkicon from './svgs/checkicon.png'
// import Checknoticon from './svgs/checknoticon.png'

const PringCheckMobile= ({
  th_tbl,
  check_tbl,
}:{
  th_tbl: string;
  check_tbl: boolean | string;
}) => {
  return (
    <tr className="border-t border-gray-200">
      <th
        className="font-display py-5 px-4 text-base font-medium text-gray-500 text-left"
        scope="row"
      >
        {th_tbl}
      </th>
      <td className="py-5 pr-4">
        {typeof check_tbl !== "boolean" ? (
          <div className="block text-base text-gray-700 metrofont">
            {check_tbl}
          </div>
        ) : check_tbl ? (
          <CheckIcon className="icon h-6 w-6 p-1 rounded-full bg-green-100 text-green-500" />
        ) : (
          <FilledMinus className="icon h-6 w-6 p-1 rounded-full bg-gray-50 text-gray-300" />
        )}
      </td>
    </tr>
  );
};
export default PringCheckMobile;
