// app/(store)/page.js
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  await connectDB();
  
  // Fetch products from MongoDB
  const products = await Product.find({}).lean();

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Hero Section */}
      <section className="bg-blue-600 rounded-3xl p-10 md:p-20 text-white mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black italic mb-6">
          UP TO 50% OFF
        </h1>
        <p className="text-xl opacity-90 mb-8">
          Check out our latest deals on premium tech and gear.
        </p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:scale-105 transition">
          Shop Deals
        </button>
      </section>

      {/* Product Grid */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black">FEATURED PRODUCTS</h2>
          <div className="h-1 w-20 bg-blue-600 mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product._id.toString()} 
            product={{
              ...product,
              id: product._id.toString()
            }} 
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed">
          <p className="text-slate-400 font-medium italic">
            No products found. Login as Admin to add some!
          </p>
        </div>
      )}
    </div>
  );
}