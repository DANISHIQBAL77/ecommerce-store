import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

/**
 * NextAuth handles all the internal GET/POST requests 
 * for login, logout, and session synchronization.
 */
const handler = NextAuth(authOptions);

// Exporting the handler as both GET and POST is required by Next.js App Router
export { handler as GET, handler as POST };