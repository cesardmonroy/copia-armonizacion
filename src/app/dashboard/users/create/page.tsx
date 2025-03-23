"use client";

import { useState } from "react";

export default function CreateUserPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "sectorial",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al servidor para crear el usuario
    console.log("Usuario creado:", formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Crear Usuario</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block font-medium">Nombre de usuario</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Correo electrónico</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Contraseña</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Rol</label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="admin">Administrador</option>
            <option value="sectorial">Sectorial</option>
            <option value="revisor">Revisor</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Crear Usuario
        </button>
      </form>
    </div>
  );
}