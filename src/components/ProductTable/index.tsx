import CompanyTd from "./components/tdCompany";
import ProductsTd from "./components/tdProducts";
import { dataTableCompany, dataTableProducts } from "@/interfaces";

interface propsProducts {
  name: string;
  description: string;
  price: string;
  company: string;
  code: number;
  nit?: number;
  address?: string;
  phone?: number;
}

export function ProductTable({ dataTable, columns, type }: any) {
  return (
    <div className="relative overflow-x-auto mt-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col: string, index: number) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((dataBody: any, index: number) => {
            switch (type) {
              case "company":
                return <CompanyTd key={index} data={dataBody} />;

              case "products":
                return <ProductsTd key={index} data={dataBody} />;

              case "inventary":
                return <ProductsTd key={index} data={dataBody} />;

              default:
                break;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
