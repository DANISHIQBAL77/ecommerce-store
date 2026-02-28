// lib/actions.js (Add this function to your existing actions)
"use server";
import connectDB from "./db";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
  await connectDB();
  const email = formData.get("email");
  const password = formData.get("password"); // Note: In production, hash this with bcrypt!

  const existingUser = await User.findOne({ email });
  if (existingUser) return { error: "User already exists" };

  await User.create({
    email,
    password,
    role: "user", // Default role
  });

  redirect("/login");
}