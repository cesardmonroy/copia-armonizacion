import { NextResponse } from "next/server";

let roles = [
  { id: 1, name: "admin", permissions: ["create", "read", "update", "delete"] },
  { id: 2, name: "sectorial", permissions: ["read", "update"] },
];

export async function GET() {
  return NextResponse.json(roles);
}