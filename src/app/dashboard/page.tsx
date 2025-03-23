"use client"; // Marca este componente como Client Component

import { useEffect } from "react"; // Importa useEffect
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  // Redirige si el usuario no está autenticado o no es administrador
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }

    if (status === "authenticated" && session.user.role !== "admin") {
      redirect("/dashboard");
    }
  }, [status, session]);

  // Si el usuario no está autenticado o no es administrador, no renderizar el contenido
  if (status !== "authenticated" || session.user.role !== "admin") {
    return null; // O un mensaje de carga
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Panel de Control</h1>
      <p>Bienvenido, {session.user.username}. Tu rol es: {session.user.role}.</p>

      {/* Botón para crear formulario */}
      <div className="mt-4">
        <Link href="/dashboard/create-form">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Crear Formulario
          </button>
        </Link>
      </div>
    </div>
  );
}