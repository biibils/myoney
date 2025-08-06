import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "@/lib/nextauth"; // Pindahkan opsi ke tempat terpisah biar rapi

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };