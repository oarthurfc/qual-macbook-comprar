"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface HeaderWithToggleProps {
  filterModel: string;
  setFilterModel: (value: string) => void;
}

export function HeaderWithToggle({ filterModel, setFilterModel }: HeaderWithToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-5xl font-bold text-secondary">Escolha por modelo</h2>
      <div className="rounded-full bg-white p-[5px]">
        <ToggleGroup
          type="single"
          value={filterModel}
          onValueChange={(value) => {
            if (value) setFilterModel(value);
          }}
        >
          <ToggleGroupItem value="MacBook Air" aria-label="MacBook Air">
            MacBook Air
          </ToggleGroupItem>
          <ToggleGroupItem value="MacBook Pro" aria-label="MacBook Pro">
            MacBook Pro
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
