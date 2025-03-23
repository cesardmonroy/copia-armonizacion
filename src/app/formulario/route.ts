import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

// Define un tipo TypeScript para los datos del formulario
type FormularioData = {
  nombrePlan: string;
  estrategiaDesarrollo: string;
  dimensionDesarrollo: string;
  sectorCatalogo: string;
  programaCatalogo: string;
  objetivoApuesta: string;
  indicadorCatalogo: string;
  descripcionIndicador: string;
  productoCatalogo: string;
  tipoMeta: string;
  unidadBase: string;
  meta: string;
  aporteProyecto: string;
  porcentaje: string;
  userId: number; // Asegúrate de que este campo esté presente
};

export async function POST(request: Request) {
  try {
    // Parsear el cuerpo de la solicitud
    const data: FormularioData = await request.json();

    // Validar los datos (puedes agregar más validaciones según sea necesario)
    if (
      !data.nombrePlan ||
      !data.estrategiaDesarrollo ||
      !data.userId ||
      !data.dimensionDesarrollo ||
      !data.sectorCatalogo ||
      !data.programaCatalogo ||
      !data.objetivoApuesta ||
      !data.indicadorCatalogo ||
      !data.descripcionIndicador ||
      !data.productoCatalogo ||
      !data.tipoMeta ||
      !data.unidadBase ||
      !data.meta ||
      !data.aporteProyecto ||
      !data.porcentaje
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Crear el formulario en la base de datos
    const formulario = await prisma.formulario.create({
      data,
    });

    // Devolver una respuesta exitosa
    return NextResponse.json(formulario, { status: 201 });
  } catch (error) {
    console.error("Error al guardar el formulario:", error);

    // Devolver un mensaje de error más detallado
    return NextResponse.json(
      { error: "Error interno del servidor al guardar el formulario" },
      { status: 500 }
    );
  } finally {
    // Cerrar la conexión de Prisma
    await prisma.$disconnect();
  }
}