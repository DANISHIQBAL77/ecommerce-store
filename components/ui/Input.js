// components/ui/Input.js
export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className="w-full space-y-1.5">
      {label && <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>}
      <input
        className={`
          w-full px-4 py-2.5 rounded-lg border bg-white outline-none transition-all
          focus:ring-4 focus:ring-blue-100 focus:border-blue-500
          ${error ? 'border-red-500 ring-red-50 ring-4' : 'border-slate-200'}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-red-500 font-medium ml-1">{error}</p>}
    </div>
  );
}