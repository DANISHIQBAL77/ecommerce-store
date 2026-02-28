// app/(store)/checkout/page.js
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CheckoutPage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-black mb-8">Your Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">$120.00</span>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border-2 border-dashed border-slate-200">
          {session ? (
            <div className="space-y-4">
              <p className="text-green-600 font-bold">✓ Logged in as {session.user.email}</p>
              <Button variant="primary" className="w-full py-4">Confirm & Pay</Button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-slate-600">You must be logged in to place an order.</p>
              <Link href="/login" className="block">
                <Button variant="secondary" className="w-full">Login to Continue</Button>
              </Link>
              <p className="text-xs text-slate-400">Don't have an account? <Link href="/signup" className="underline">Sign up here</Link></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}