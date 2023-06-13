const PriceGroup = ({ name }: { name: string }) => {
  return (
    <tr>
      <th
        className="bg-gray-50 font-display py-3 pl-6 text-base font-semibold text-gray-900 text-left"
        colSpan={5}
        scope="colgroup"
      >
        {name}
      </th>
    </tr>
  );
};

export default PriceGroup;
