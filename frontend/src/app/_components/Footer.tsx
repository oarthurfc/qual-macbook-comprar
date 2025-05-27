"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-sm text-foreground">
      <div className="mx-auto max-w-5xl border-t border-gray-300 px-6 py-12">
        {/* Disclaimer / Legal Text */}
        <p className="mb-6">
          1. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization.
          The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest
          firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and
          are intended for people 18 years old or older. The Hearing Aid feature is also supported
          on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived
          mild to moderate hearing loss.
        </p>
        <p className="mb-6">
          2. Trade‑in values will vary based on the condition, year, and configuration of your
          eligible trade‑in device. Not all devices are eligible for credit. You must be at least
          the age of majority to be eligible to trade in for credit or for an Apple Gift Card.
          Trade‑in value may be applied toward qualifying new device purchase, or added to an
          Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching
          the description provided when estimate was made. Sales tax may be assessed on full value
          of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID
          (local law may require saving this information). Offer may not be available in all stores,
          and may vary between in‑store and online trade‑in. Some stores may have additional
          requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit
          quantity of any trade‑in transaction for any reason. More details are available from
          Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and
          limitations may apply.
        </p>

        {/* Links */}
        <div className="mb-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          <div>
            <h4 className="mb-2 font-semibold text-secondary">Loja</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#">Mac</Link>
              </li>
              <li>
                <Link href="#">iPad</Link>
              </li>
              <li>
                <Link href="#">iPhone</Link>
              </li>
              <li>
                <Link href="#">Apple Watch</Link>
              </li>
              <li>
                <Link href="#">Acessórios</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-secondary">Atendimento</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#">Suporte</Link>
              </li>
              <li>
                <Link href="#">Status do Pedido</Link>
              </li>
              <li>
                <Link href="#">Devoluções</Link>
              </li>
              <li>
                <Link href="#">Pagamentos</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-secondary">Sobre</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#">Nossa História</Link>
              </li>
              <li>
                <Link href="#">Trabalhe Conosco</Link>
              </li>
              <li>
                <Link href="#">Sustentabilidade</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-secondary">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="#">Termos de Uso</Link>
              </li>
              <li>
                <Link href="#">Cookies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-black">Redes Sociais</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>
                <Link href="#">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-gray-300 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <Link href="#">Política de Privacidade</Link>
            <Link href="#">Termos de Serviço</Link>
            <Link href="#">Mapa do Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
