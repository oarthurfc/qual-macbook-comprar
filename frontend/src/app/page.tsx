import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-secondary">Qual MacBookComprar em 2025?</h1>
      <Image src="/hero-macbook.png" alt="Logo" width={694} height={332} />
      <p className="mt-4 text-foreground text-lg">Descubra a faixa de preço ideal com base em modelo, tamanho da tela e ano.</p>
      <Button className="mt-4">
        Começar
      </Button>
    </main>
  );
}
