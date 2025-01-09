import { Clock } from "lucide-react";
import FeaturedContent from "../Featured";
import CurrentStatus from "../Status";

function Hero() {
  return (
    <main className="container mx-auto px-4 py-8">
      <FeaturedContent />
      <CurrentStatus />
      {/* Main Content */}

      {/* Activity Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="bg-gray-900 rounded-lg p-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <ActivityItem
              key={i}
              type="Sale"
              item={`Antlantis #${i + 1}`}
              price="2.5 ETH"
              time="2 minutes ago"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Hero;

function ActivityItem({ type, item, price, time }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-800 rounded-lg">
          <Clock className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium">{item}</p>
          <p className="text-sm text-gray-400">{type}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{price}</p>
        <p className="text-sm text-gray-400">{time}</p>
      </div>
    </div>
  );
}
