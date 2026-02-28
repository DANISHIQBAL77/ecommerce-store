// app/(store)/layout.js
import Navbar from "@/components/Navbar";

export default function StoreLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      {/* This Navbar stays visible as you navigate between store pages */}
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-slate-900 text-white py-10 text-center">
        <p>© 2026 MEGASTORE. Built with Next.js & MongoDB.</p>
      </footer>
    </div>
  );
}