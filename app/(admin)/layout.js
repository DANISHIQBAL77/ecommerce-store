import Link from 'next/link';
export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 text-slate-200 fixed h-full p-6">
        <div className="text-xl font-bold text-white mb-10">Admin Dashboard</div>
        <nav className="flex flex-col gap-4">
          <Link href="/admin/products" className="hover:text-blue-400">📦 Products & Deals</Link>
          <Link href="/admin/promos" className="hover:text-blue-400">🎫 Promo Codes</Link>
          <div className="mt-10 pt-10 border-t border-slate-700">
            <Link href="/" className="text-sm opacity-50 hover:opacity-100 italic underline">
              Return to Website
            </Link>
          </div>
        </nav>
      </aside>
      <main className="ml-64 flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}