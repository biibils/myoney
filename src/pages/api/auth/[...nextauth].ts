import NextAuth from "next-auth"
import { authOptions } from "@/lib/nextauth"

export default NextAuth(authOptions) // HARUS export default!