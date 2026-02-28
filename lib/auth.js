// lib/auth.js
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/models/User";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email });

        // Simple password check (In production, use bcrypt to compare)
        if (user && user.password === credentials.password) {
          return { id: user._id, email: user.email, role: user.role };
        }
        return null;
      }
    })
  ],
  callbacks: {
    // Add the role to the JWT token
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // Pass the role to the frontend session
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    }
  },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};