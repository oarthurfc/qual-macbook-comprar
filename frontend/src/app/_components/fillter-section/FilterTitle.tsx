"use server"

export default async function FilterTitle() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className=" gap-2 text-center flex flex-col">
        <h2 className="text-secondary text-3xl font-bold">Busca com filtros</h2>
        <p className="text-foreground text-lg font-semibold">
          Preencha alguns campos para encontrar o preço ideal.
        </p>
      </div>
    </div>
  );
}
