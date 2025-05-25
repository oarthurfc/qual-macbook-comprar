import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="flex flex-col min-h-screen mb-8 justify-center items-center text-center gap-14">
      <h1 className="text-5xl font-bold text-secondary max-w-lg">Qual MacBook comprar em 2025?</h1>
      <Image src="/hero-macbook.png" alt="Logo" width={694} height={332} />
      <div className="flex flex-col max-w-md items-center gap-4">
        <p className="text-foreground text-xl font-semibold gap-4">
          Descubra a faixa de preço ideal com base em modelo, tamanho da tela e ano.
        </p>
        <Button>Começar agora</Button>
      </div>
    </main>
  );
}
