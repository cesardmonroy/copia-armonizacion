"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function CreateFormPage() {
  const [formData, setFormData] = useState({
    nombrePlan: "",
    estrategiaDesarrollo: "",
    dimensionDesarrollo: "",
    sectorCatalogo: "",
    programaCatalogo: "",
    objetivoApuesta: "",
    indicadorCatalogo: "",
    descripcionIndicador: "",
    productoCatalogo: "",
    tipoMeta: "",
    unidadBase: "",
    meta: "",
    aporteProyecto: "",
    porcentaje: "",
    userId: 1, // Asegúrate de incluir el ID del usuario autenticado
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Error al guardar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Formulario</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre del Plan:</label>
          <input
            type="text"
            name="nombrePlan"
            value={formData.nombrePlan}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Estrategia de Desarrollo:</label>
          <input
            type="text"
            name="estrategiaDesarrollo"
            value={formData.estrategiaDesarrollo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Repite este patrón para los demás campos */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Guardar Formulario
        </button>
      </form>
    </div>
  );
}