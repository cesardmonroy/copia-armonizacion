-- CreateTable
CREATE TABLE "Formulario" (
    "id" SERIAL NOT NULL,
    "nombrePlan" TEXT NOT NULL,
    "estrategiaDesarrollo" TEXT NOT NULL,
    "dimensionDesarrollo" TEXT NOT NULL,
    "sectorCatalogo" TEXT NOT NULL,
    "programaCatalogo" TEXT NOT NULL,
    "objetivoApuesta" TEXT NOT NULL,
    "indicadorCatalogo" TEXT NOT NULL,
    "descripcionIndicador" TEXT NOT NULL,
    "productoCatalogo" TEXT NOT NULL,
    "tipoMeta" TEXT NOT NULL,
    "unidadBase" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "aporteProyecto" TEXT NOT NULL,
    "porcentaje" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Formulario" ADD CONSTRAINT "Formulario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
