"use client"; // Marca este componente como Client Component

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function FormularioPage() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  // Redirige si el usuario no está autenticado o no tiene el rol correcto
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login"); // Redirige a la página de inicio de sesión
    }

    if (status === "authenticated" && session.user.role !== "sectorial") {
      redirect("/dashboard"); // Redirige al dashboard si no tiene el rol "sectorial"
    }
  }, [status, session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Formulario enviado con éxito');
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Si el usuario no está autenticado o no tiene el rol correcto, no renderizar el formulario
  if (status !== "authenticated" || session.user.role !== "sectorial") {
    return null; // O un mensaje de carga
  }

  return (
    <div>
      <h1>Crear Armonización</h1>
      <p>Bienvenido, {session.user.username}. Puedes llenar el formulario.</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
        <div className="mb-4">
          <label className="block font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-3 py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}