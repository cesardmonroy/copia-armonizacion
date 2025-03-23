import { protegerRuta } from "@/lib/auth";

export async function getServerSideProps(context) {
  // Solo los usuarios con rol "jefe2" pueden acceder
  return protegerRuta(context, ["jefe2"]);
}

export default function AprobacionFinalPage({ session }) {
  return (
    <div>
      <h1>Aprobación Final</h1>
      <p>Bienvenido, {session.user.username}. Puedes firmar y aprobar.</p>
      {/* Aquí iría la funcionalidad de firma final */}
    </div>
  );
}