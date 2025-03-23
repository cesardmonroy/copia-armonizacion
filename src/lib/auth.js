// lib/auth.js
import { getSession } from "next-auth/react";

export async function protegerRuta(context, rolesPermitidos) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (rolesPermitidos && !rolesPermitidos.includes(session.user.role)) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}