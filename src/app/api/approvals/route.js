import { NextResponse } from "next/server";

let approvals = [
  { id: 1, user: "sectorial1", request: "Actualización de datos", status: "Pendiente" },
  { id: 2, user: "sectorial2", request: "Nuevo registro", status: "Pendiente" },
];

export async function GET() {
  return NextResponse.json(approvals);
}