import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Ruta protegida para el rol "sectorial"
  if (req.nextUrl.pathname.startsWith("/formulario")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (session.user.role !== "sectorial") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}