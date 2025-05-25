export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-3xl font-bold text-secondary">Busca com filtros</h2>
        <p className="text-foreground text-lg font-semibold max-w-md">
          Preencha alguns campos para encontrar o preço ideal.
        </p>
      </div>
    </div>
  );
}
