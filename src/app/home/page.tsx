"use client";
import { Form } from "@/components/Form";
import { dateTransform } from "@/utils/dateTransform";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";
import Header from "@/components/Header";
import PageTemplate from "@/components/Templates";
import { ProductTable } from "@/components/ProductTable";

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
    }, 3000);
    finishLoading();
  };

  return (
    <section className="my-[10px] flex flex-col justify-center text-center px-3">
      <h1 className="text-2xl lg:text-[50px] font-extrabold animate-flip-up animate-once animate-ease-in">
        BIENVENIDO DE VUELTA!
      </h1>
      <h2 className=" w-auto lg:w-[560px] p-9">
        Encontraras información de primera mano en los diferentes productos de
        tecnologias, nuestra plataforma está realizada con el fin tener un
        control de tu stock de productos y facilitar tu día a día haciendo todo
        de manera Átomica
      </h2>
    </section>
  );
}
