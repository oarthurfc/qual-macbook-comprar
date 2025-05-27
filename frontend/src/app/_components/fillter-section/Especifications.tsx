"use server";

export default async function Especifications() {
  return (
    <div>
      <h3 className="pb-6 text-xl font-bold text-secondary">Específicações</h3>
      <ul className="flex flex-col gap-3">
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Modelo: </span> MacBook Air 3200
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Tamanho: 13”</span>
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Processador: </span>Core 2 Duo
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Memória RAM: </span>2GB
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Armazenamento: </span>120GB
          </p>
        </li>
      </ul>
    </div>
  );
}
