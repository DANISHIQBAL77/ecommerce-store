"use client";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white border-b sticky top-0 z-50">
      <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
        MEGASTORE
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="font-medium hover:text-blue-600 transition">Shop</Link>
        
        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
              <Link href="/checkout" className="relative p-2">
    🛒 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
      {cartCount}
    </span>
  </Link>
            {/* Show Dashboard link ONLY for Admins */}
            {session.user.role === "admin" && (
              <Link href="/admin/dashboard" className="text-blue-600 font-bold hover:underline">
                Dashboard
              </Link>
            )}
            
            <span className="text-sm text-slate-500 hidden md:block">{session.user.email}</span>
            
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}