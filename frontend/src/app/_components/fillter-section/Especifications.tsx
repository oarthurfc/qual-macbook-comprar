"use server";

export default async function Especifications() {
  return (
    <div>
      <h3 className="text-secondary text-xl font-bold pb-6">Específicações</h3>
      <ul className="flex flex-col gap-3">
        <li>
          <p className="text-foreground font-semibold">
            <span className="text-secondary font-bold">Modelo: </span> MacBook Air 3200
          </p>
        </li>
        <li>
          <p className="text-foreground font-semibold">
            <span className="text-secondary font-bold">Tamanho: 13”</span>
          </p>
        </li>
        <li>
          <p className="text-foreground font-semibold">
            <span className="text-secondary font-bold">Processador: </span>Core 2 Duo
          </p>
        </li>
        <li>
          <p className="text-foreground font-semibold">
            <span className="text-secondary font-bold">Memória RAM: </span>2GB
          </p>
        </li>
        <li>
          <p className="text-foreground font-semibold">
            <span className="text-secondary font-bold">Armazenamento: </span>120GB
          </p>
        </li>
      </ul>
    </div>
  );
}
