interface propsComponent {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  subChildren?: React.ReactNode;
  isDisabled?: boolean;
}

export default function PageTemplate({
  title,
  description,
  children,
  subChildren,
  isDisabled,
}: propsComponent) {
  return (
    <div className="w-[350px] lg:w-[1000px] justify-center flex flex-col lg:flex-row gap-10 ">
      <section className="px-3 w-auto">
        <h2 className="text-5xl font-bold mb-2 ">{title}</h2>
        <p className="text-xl px-5">{description}</p>
        {subChildren}
      </section>
      <section className="m-auto">{children}</section>
    </div>
  );
}
