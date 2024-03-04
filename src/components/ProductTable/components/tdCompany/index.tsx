export default function CompanyTd({ data }: any) {
  const { nit, nameCompany, address, phone } = data;

  return (
    <tr
      key={nit}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {nit}
      </th>
      <td className="px-6 py-4">{nameCompany}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">{phone}</td>
    </tr>
  );
}
