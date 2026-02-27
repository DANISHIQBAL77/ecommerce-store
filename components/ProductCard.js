// components/ProductCard.js
export default function ProductCard({ product }) {
  const isSale = product.discountPrice > 0;

  return (
    <div className="bg-white border rounded-2xl p-5 hover:shadow-xl transition-shadow group">
      <div className="bg-gray-100 h-52 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
        {isSale && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full">
            SALE
          </span>
        )}
        <span className="text-4xl group-hover:scale-125 transition-transform italic">🛍️</span>
      </div>
      
      <p className="text-xs text-blue-600 font-bold uppercase mb-1">{product.category}</p>
      <h3 className="text-lg font-bold mb-3">{product.name}</h3>
      
      <div className="flex items-center gap-3 mb-5">
        {isSale ? (
          <>
            <span className="text-2xl font-black text-slate-900">${product.discountPrice}</span>
            <span className="text-sm text-gray-400 line-through font-medium">${product.price}</span>
          </>
        ) : (
          <span className="text-2xl font-black text-slate-900">${product.price}</span>
        )}
      </div>

      <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  );
}