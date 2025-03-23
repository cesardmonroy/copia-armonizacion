import { protegerRuta } from "@/lib/auth";

export async function getServerSideProps(context) {
  // Solo los usuarios con rol "revisor" pueden acceder
  return protegerRuta(context, ["revisor"]);
}

export default function RevisionPage({ session }) {
  return (
    <div>
      <h1>Revisar Armonización</h1>
      <p>Bienvenido, {session.user.username}. Puedes revisar y aprobar.</p>
      {/* Aquí irían las funcionalidades de revisión */}
    </div>
  );
}