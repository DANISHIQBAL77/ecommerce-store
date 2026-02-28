// app/signup/page.js
"use client";
import { registerUser } from "@/lib/actions";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [error, setError] = useState("");

  async function handleSubmit(formData) {
    const result = await registerUser(formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-black italic">JOIN THE STORE</h1>
          <p className="text-slate-500 text-sm">Create an account to start ordering</p>
        </div>

        {error && <p className="bg-red-50 text-red-500 p-3 rounded-lg text-sm font-bold text-center">{error}</p>}

        <form action={handleSubmit} className="space-y-4">
          <Input name="email" label="Email Address" type="email" required placeholder="name@example.com" />
          <Input name="password" label="Create Password" type="password" required placeholder="••••••••" />
          
          <Button type="submit" variant="primary" className="w-full py-4">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-slate-600">
          Already a member? <Link href="/login" className="text-blue-600 font-bold hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}