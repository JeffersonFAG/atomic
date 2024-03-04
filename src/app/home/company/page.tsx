"use client";
import { Form } from "@/components/Form";
import { dateTransform } from "@/utils/dateTransform";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";
import PageTemplate from "@/components/Templates";
import { ProductTable } from "@/components/ProductTable";

const companyListMock = [
  {
    nit: "53t7124245",
    nameCompany: "Produc 3",
    address: "Mnz 34 casa 1",
    phone: 1233455467,
  },
  {
    nit: "53t7124245",
    nameCompany: "Produc 3",
    address: "Mnz 34 casa 1",
    phone: 1233455467,
  },
];

const columns = ["NIT", "Empresa", "Dirección", "Telefono"];

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
      console.log("GUARADAR EMPRESA", formData);
    }, 500);
    finishLoading();
  };

  return (
    <PageTemplate
      title="Átomico desde el inicio"
      description="Átomo es una empresa colombiana fundada en 2020 que se dedica al
          desarrollo de software a la medida. Brindamos soluciones innovadoras y
          personalizadas para potenciar el éxito de nuestros clientes. Contamos
          con un equipo de más de 50 profesionales altamente calificados y
          apasionados por la tecnología."
      subChildren={
        <ProductTable
          dataTable={companyListMock}
          columns={columns}
          type="company"
        />
      }
    >
      <Form
        title="Agregar Empresa"
        onSubmit={saveCompany}
        description="Formulario agregar empresa"
      >
        <div className="my-[10px] flex flex-col gap-4">
          <Form.Input label="NIT" name="nit" placeholder="NIT" required />
          <Form.Input
            label="Nombre empresa"
            placeholder="Nombre empresa"
            name="company"
            required
          />
          <Form.Input
            placeholder="Telefono"
            label="Telefono"
            name="phone"
            required
          />
          <Form.Input
            label="Dirección"
            placeholder="Dirección"
            name="address"
            required
          />
        </div>
        <Form.SubmitButton buttonText="Guardar empresa" isLoading={isLoading} />
      </Form>
    </PageTemplate>
  );
}
