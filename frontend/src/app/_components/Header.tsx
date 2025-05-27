"use client"

import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-around mx-auto py-3 bg-white">
      <div className="flex justify-between items-center max-w-5xl w-full">
        <h4 className="text-sm font-semibold">QualMacBookComprar</h4>
        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row gap-4">
          <span>icon</span>
          <span>icon</span>
        </div>
      </div>
    </div>
  );
}
