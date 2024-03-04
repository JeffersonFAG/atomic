"use client";
import { Button } from "@/components/Button";
import PDF from "@/components/PDFrender";
import { ProductTable } from "@/components/ProductTable";
import PageTemplate from "@/components/Templates";
import { useLoading } from "@/hooks/useLoading";
import { PDFDownloadLink } from "@react-pdf/renderer";

const inventaryListMock = [
  {
    code: "1232323",
    name: "Produc to 1",
    description: "Te besth",
    price: 123,
    company: "Atomo",
  },
  {
    code: "45672",
    name: "Produc to 2",
    description: "Te LAST",
    price: 1223,
    company: "Atomo",
  },
];

const columns = ["Código", "Producto", "Descripción", "Precio", "Empresa"];
export default function HomePage() {
  const { finishLoading, isLoading, startLoading } = useLoading();

  const saveCompany = async (formData: any) => {
    startLoading();
    setTimeout(() => {
      console.log("DESCARGAR PDF", formData);
    }, 500);
    finishLoading();
  };

  return (
    <PageTemplate
      title="Inventario"
      description="Lista de productos que actualmente se encuentras disponible para solitidu del usuario puedes descargar esta lista dando click en el btn Descargar inventario´"
      subChildren={
        <ProductTable
          dataTable={inventaryListMock}
          columns={columns}
          type="inventary"
        />
      }
    >
      <div className="mt-10">
        {/* <Button
          title="Descargar inventario"
          onClick={() => {
            console.log("SU INVENTARIO FUE DESCARGADO");
          }}
        /> */}
        <PDFDownloadLink
          document={<PDF dataTable={inventaryListMock} columns={columns} />}
          fileName="InventarioÁtomic"
        >
          {({ loading, url, error, blob }) =>
            loading ? (
              <Button
                title="Cargando documento"
                onClick={() => {
                  console.log("SU INVENTARIO FUE DESCARGADO");
                }}
              />
            ) : (
              <Button
                title="Descargar inventario"
                onClick={() => {
                  console.log("SU INVENTARIO FUE DESCARGADO");
                }}
              />
            )
          }
        </PDFDownloadLink>
      </div>
    </PageTemplate>
  );
}
