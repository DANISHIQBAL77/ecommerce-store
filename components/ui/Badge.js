// components/ui/Badge.js
export default function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    red: "bg-red-50 text-red-600 border-red-100",
    green: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${colors[color]}`}>
      {children}
    </span>
  );
}