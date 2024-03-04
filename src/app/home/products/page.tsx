"use client";
import { Form } from "@/components/Form";
import { dateTransform } from "@/utils/dateTransform";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";
import { ProductTable } from "@/components/ProductTable";
import PageTemplate from "@/components/Templates";

const productListMock = [
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

async function getData() {
  const res = await fetch("http://localhost:3000/api/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function HomePage() {
  const { finishLoading, isLoading, startLoading } = useLoading();
  const authFetch = useAuthFetch();

  const saveCompany = async (formData: any) => {
    startLoading();
    setTimeout(() => {
      console.log("GUARADAR PRODUCTO", formData);
    }, 500);
    finishLoading();
  };

  return (
    <PageTemplate
      title="Productos agregados"
      description="Estos productos han sido agregados en funcion de la necesidad del usuario, puedes encontrar cada una de sus caracteristicas y precio en diferente moneda."
      subChildren={
        <ProductTable
          dataTable={productListMock}
          columns={columns}
          type="products"
        />
      }
    >
      <Form
        title="Agregar Producto"
        onSubmit={saveCompany}
        description="Formulario agregar empresa"
      >
        <div className="my-[10px] flex flex-col gap-4">
          <Form.Input
            label="code"
            name="Código"
            placeholder="Código del producto"
          />
          <Form.Input
            label="Nombre producto"
            placeholder="Nombre producto"
            name="company"
          />
          <Form.Input
            label="Caracteristicas"
            placeholder="Caracteristicas"
            name="features"
          />
          <Form.Input
            placeholder="Precio(select)"
            label="Precio"
            name="price"
          />

          <Form.Input
            label="Empresa(select)"
            placeholder="Empresa"
            name="company"
          />
        </div>
        <Form.SubmitButton
          buttonText="Guardar producto"
          isLoading={isLoading}
        />
      </Form>
    </PageTemplate>
  );
}
