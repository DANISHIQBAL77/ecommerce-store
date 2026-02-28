// app/signup/page.js
import { registerUser } from "@/lib/actions";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form action={registerUser} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5">
        <div className="text-center">
          <h1 className="text-3xl font-black italic">CREATE ACCOUNT</h1>
          <p className="text-slate-500 text-sm">Join us to start shopping</p>
        </div>

        <Input name="email" label="Email Address" type="email" required />
        <Input name="password" label="Password" type="password" required />

        <Button type="submit" variant="primary" className="w-full">
          Create Account
        </Button>

        <p className="text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="text-blue-600 font-bold">Login</Link>
        </p>
      </form>
    </div>
  );
}