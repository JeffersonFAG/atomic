export default function ProductsTd({ data }: any) {
  const { code, name, description, price, company } = data;

  return (
    <tr
      key={code}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {code}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4">{company}</td>
    </tr>
  );
}
