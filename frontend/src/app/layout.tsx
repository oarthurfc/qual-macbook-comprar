import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/app/_components/Header";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qual MacBook Comprar",
  description: "Por Gabriel De Pinho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interSans.variable} antialiased bg-gradient-to-b from-[#D4EAF6] via-[#FAFAFA] to-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
