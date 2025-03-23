"use client"; // Marca este componente como Client Component

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: credentials.username,
      password: credentials.password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <div className="mb-4">
          <label className="block font-medium">Usuario</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Contraseña</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-3 py-2 rounded"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}