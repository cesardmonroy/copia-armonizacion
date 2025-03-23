"use client"; // Necesario para usar hooks en Next.js 13+

import { useSearchParams } from "next/navigation";

export default function PreviewFormPage() {
  const searchParams = useSearchParams();

  // Recupera los datos de la URL
  const nombrePlan = searchParams.get("nombrePlan");
  const estrategiaDesarrollo = searchParams.get("estrategiaDesarrollo");
  const dimensionDesarrollo = searchParams.get("dimensionDesarrollo");
  const sectorCatalogo = searchParams.get("sectorCatalogo");
  const programaCatalogo = searchParams.get("programaCatalogo");
  const objetivoApuesta = searchParams.get("objetivoApuesta");
  const indicadorCatalogo = searchParams.get("indicadorCatalogo");
  const descripcionIndicador = searchParams.get("descripcionIndicador");
  const productoCatalogo = searchParams.get("productoCatalogo");
  const tipoMeta = searchParams.get("tipoMeta");
  const unidadBase = searchParams.get("unidadBase");
  const meta = searchParams.get("meta");
  const aporteProyecto = searchParams.get("aporteProyecto");
  const porcentaje = searchParams.get("porcentaje");

  return (
    <div>
      <h1>Vista Previa del Formulario</h1>
      <div>
        <p><strong>Nombre del Plan:</strong> {nombrePlan}</p>
        <p><strong>Estrategia de Desarrollo:</strong> {estrategiaDesarrollo}</p>
        <p><strong>Dimensión de Desarrollo:</strong> {dimensionDesarrollo}</p>
        <p><strong>Sector según Catálogo:</strong> {sectorCatalogo}</p>
        <p><strong>Programa según Catálogo:</strong> {programaCatalogo}</p>
        <p><strong>Objetivo Apuesta:</strong> {objetivoApuesta}</p>
        <p><strong>Indicador según Catálogo:</strong> {indicadorCatalogo}</p>
        <p><strong>Descripción del Indicador:</strong> {descripcionIndicador}</p>
        <p><strong>Producto según Catálogo:</strong> {productoCatalogo}</p>
        <p><strong>Tipo de Meta:</strong> {tipoMeta}</p>
        <p><strong>Unidad Base:</strong> {unidadBase}</p>
        <p><strong>Meta:</strong> {meta}</p>
        <p><strong>Aporte del Proyecto:</strong> {aporteProyecto}</p>
        <p><strong>Porcentaje:</strong> {porcentaje}</p>
      </div>
    </div>
  );
}