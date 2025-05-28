"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ScrollButton() {
  return (
    <Button asChild>
      <Link href="#filter-section">Começar agora</Link>
    </Button>
  );
}
