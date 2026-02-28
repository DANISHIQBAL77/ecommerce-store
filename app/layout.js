// app/layout.js
"use client";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}