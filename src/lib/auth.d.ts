import { GetServerSidePropsContext } from "next";

export function protegerRuta(
  context: GetServerSidePropsContext,
  rolesPermitidos?: string[]
): Promise<{ redirect: { destination: string; permanent: boolean } } | { props: { session: any } }>;