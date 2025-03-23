"use client";

export default function ApprovalsPage() {
  const approvals = [
    { id: 1, user: "sectorial1", request: "Actualización de datos", status: "Pendiente" },
    { id: 2, user: "sectorial2", request: "Nuevo registro", status: "Pendiente" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Aprobaciones</h1>
      <p>Aquí puedes revisar y aprobar solicitudes.</p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">ID</th>
              <th className="px-6 py-3 border-b">Usuario</th>
              <th className="px-6 py-3 border-b">Solicitud</th>
              <th className="px-6 py-3 border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((approval) => (
              <tr key={approval.id}>
                <td className="px-6 py-4 border-b">{approval.id}</td>
                <td className="px-6 py-4 border-b">{approval.user}</td>
                <td className="px-6 py-4 border-b">{approval.request}</td>
                <td className="px-6 py-4 border-b">{approval.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}