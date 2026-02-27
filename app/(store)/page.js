
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const products = [
    { id: 1, name: "Ultra Headphones", price: 299, discountPrice: 199, category: "Audio" },
    { id: 2, name: "Mechanical Keyboard", price: 150, category: "Tech" },
    { id: 3, name: "Smart Watch", price: 199, discountPrice: 159, category: "Wearables" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">New Arrivals</h1>
        <p className="text-gray-500">Check out our latest deals and products.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}