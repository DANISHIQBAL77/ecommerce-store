// components/Navbar.js
"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white border-b sticky top-0 z-50">
      <Link href="/" className="text-2xl font-black italic tracking-tighter text-slate-900">
        MEGASTORE
      </Link>

      <div className="flex items-center gap-5 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">Shop</Link>
        
        {session ? (
          <>
            {session.user.role === "admin" && (
              <Link href="/admin/dashboard" className="text-blue-600 font-bold border-b-2 border-blue-600">
                Admin Panel
              </Link>
            )}
            <Button variant="ghost" size="sm" onClick={() => signOut()}>Logout</Button>
          </>
        ) : (
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary" size="sm">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}