import { useSearchParams } from "next/navigation";

export default function Resultado() {
  const params = useSearchParams();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Resultado</h1>
      <p>
        <strong>Nombre:</strong> {params.get("nombre")}
      </p>
      <p>
        <strong>Email:</strong> {params.get("email")}
      </p>
      <p>
        <strong>Teléfono:</strong> {params.get("telefono")}
      </p>
    </div>
  );
}