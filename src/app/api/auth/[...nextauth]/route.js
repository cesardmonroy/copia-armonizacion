import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const users = [
  { id: 1, username: "admin", password: await bcrypt.hash("admin123", 10), role: "admin" },
  { id: 2, username: "sectorial", password: await bcrypt.hash("sectorial123", 10), role: "sectorial" },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find((u) => u.username === credentials.username);
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Usa la variable de entorno
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };