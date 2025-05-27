"use server";

export default async function FilterTitle() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-3xl font-bold text-secondary">Busca com filtros</h2>
        <p className="text-lg font-semibold text-foreground">
          Preencha alguns campos para encontrar o preço ideal.
        </p>
      </div>
    </div>
  );
}
