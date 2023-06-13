import CheckIcon from "icons/Check";
import FilledMinus from "icons/FilledMinus";
import { PriceItemType } from "types/Price";

const PricingCheck = ({ item }: { item: PriceItemType }) => {
  return (
    <tr>
      <th
        className="py-5 px-6 text-base font-medium text-gray-500 text-left"
        scope="row"
      >
        {item.name}
      </th>
      <td className="py-5 px-6">
        {typeof item.hacker !== "boolean" ? (
          item.hacker
        ) : item.hacker ? (
          <CheckIcon className="icon h-6 w-6 p-1 rounded-full bg-green-100 text-green-500" />
        ) : (
          <FilledMinus className="icon h-6 w-6 p-1 rounded-full bg-gray-50 text-gray-300" />
        )}
      </td>
      <td className="py-5 px-6">
        {typeof item.startups !== "boolean" ? (
          <div className="block text-base text-gray-700 metrofont">
            {item.startups}
          </div>
        ) : item.startups ? (
          <CheckIcon className="icon h-6 w-6 p-1 rounded-full bg-green-100 text-green-500" />
        ) : (
          <FilledMinus className="icon h-6 w-6 p-1 rounded-full bg-gray-50 text-gray-300" />
        )}
      </td>
      <td className="py-5 px-6">
        {typeof item.business !== "boolean" ? (
          <div className="block text-base text-gray-700 metrofont">
            {item.business}
          </div>
        ) : item.business ? (
          <CheckIcon className="icon h-6 w-6 p-1 rounded-full bg-green-100 text-green-500" />
        ) : (
          <FilledMinus className="icon h-6 w-6 p-1 rounded-full bg-gray-50 text-gray-300" />
        )}
      </td>
      <td className="py-5 px-6">
        {typeof item.enterprise !== "boolean" ? (
          <div className="block text-base text-gray-700 metrofont">
            {item.enterprise}
          </div>
        ) : item.enterprise ? (
          <CheckIcon className="icon h-6 w-6 p-1 rounded-full bg-green-100 text-green-500" />
        ) : (
          <FilledMinus className="icon h-6 w-6 p-1 rounded-full bg-gray-50 text-gray-300" />
        )}
      </td>
    </tr>
  );
};
export default PricingCheck;
