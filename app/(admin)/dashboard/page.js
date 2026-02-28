// app/(admin)/admin/dashboard/page.js
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import PromoCode from '@/models/PromoCode';
import { Card, CardContent } from '@/components/ui/Card';

export default async function DashboardPage() {
  await connectDB();
  
  // Fetch stats from MongoDB
  const productCount = await Product.countDocuments();
  const activeDeals = await Product.countDocuments({ discountPrice: { $gt: 0 } });
  const promoCount = await PromoCode.countDocuments({ isActive: true });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black italic">DASHBOARD OVERVIEW</h1>
        <p className="text-slate-500">Welcome back, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Products" value={productCount} icon="📦" color="blue" />
        <StatsCard title="Active Deals" value={activeDeals} icon="🔥" color="orange" />
        <StatsCard title="Promo Codes" value={promoCount} icon="🎫" color="green" />
      </div>

      <Card>
        <CardContent className="p-10 text-center">
          <h3 className="text-lg font-bold text-slate-400">Recent Activity Feed Coming Soon...</h3>
        </CardContent>
      </Card>
    </div>
  );
}

// Simple internal component for stats
function StatsCard({ title, value, icon, color }) {
  return (
    <Card className={`border-l-4 border-${color}-500`}>
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-bold text-slate-500 uppercase">{title}</p>
          <p className="text-3xl font-black mt-1">{value}</p>
        </div>
        <span className="text-4xl opacity-20">{icon}</span>
      </CardContent>
    </Card>
  );
}