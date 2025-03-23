"use client";

import { FaHome, FaUsers, FaCog, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Panel de Control</h1>
      </div>
      <nav className="mt-6">
        <Link href="/dashboard" className="flex items-center p-3 hover:bg-gray-700">
        <FaHome className="h-6 w-6 mr-3" />
        Inicio
        </Link>
        <Link href="/dashboard/users" className="flex items-center p-3 hover:bg-gray-700">
        <FaUsers className="h-6 w-6 mr-3" />
        Gestión de Usuarios
        </Link>
        <Link href="/dashboard/roles" className="flex items-center p-3 hover:bg-gray-700">
        <FaCog className="h-6 w-6 mr-3" />
        Roles y Permisos
        </Link>
        <Link href="/dashboard/approvals" className="flex items-center p-3 hover:bg-gray-700">
        <FaFileAlt className="h-6 w-6 mr-3" />
        Aprobaciones
        </Link>
        <button className="flex items-center p-3 w-full hover:bg-gray-700">
        <FaSignOutAlt className="h-6 w-6 mr-3" />
        Cerrar Sesión
        </button>
      </nav>
    </div>
  );
}