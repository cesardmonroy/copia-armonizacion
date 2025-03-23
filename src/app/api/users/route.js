import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obtener todos los usuarios de la base de datos
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    // Manejar errores
    return NextResponse.json(
      { error: "Unable to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Obtener los datos del nuevo usuario del cuerpo de la solicitud
    const { username, email, password, role } = await request.json();

    // Crear un nuevo usuario en la base de datos
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
        role,
      },
    });

    // Devolver el nuevo usuario creado
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    // Manejar errores
    return NextResponse.json(
      { error: "Unable to create user" },
      { status: 500 }
    );
  }
}