import { Document, Text, Page, View } from "@react-pdf/renderer";
import { ProductTable } from "../ProductTable";

export default function PDF({ dataTable, columns }: any) {
  return (
    <Document>
      <Page size="A3">
        <Text>Inventario Atomo</Text>
        <View>
          <ProductTable
            dataTable={dataTable}
            columns={columns}
            type="inventary"
          />
        </View>
      </Page>
    </Document>
  );
}
