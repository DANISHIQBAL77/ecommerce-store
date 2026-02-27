import './globals.css';

export const metadata = {
  title: 'JS E-Commerce Store',
  description: 'Next.js Shopping App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-900">{children}</body>
    </html>
  );
}