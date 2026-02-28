// app/login/page.js
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/"); // Redirect to home, Navbar will handle the rest
      router.refresh();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-black italic">WELCOME BACK</h1>
          <p className="text-slate-500 text-sm">Login to access your account</p>
        </div>

        <Input 
          label="Email Address" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <Button type="submit" variant="primary" className="w-full py-4">
          Sign In
        </Button>
      </form>
    </div>
  );
}