import Link from 'next/link';

export default function StoreLayout({ children }) {
  return (
    <div>
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600">
          SHOP.JS
        </Link>
        <div className="space-x-6 font-medium">
          <Link href="/">Shop</Link>
          <Link href="/admin/products" className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Admin Panel
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}