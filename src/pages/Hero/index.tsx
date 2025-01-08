import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FeaturedContent from "../Featured";
import CurrentStatus from "../Status";

function Hero() {
  return (
    <main className="container mx-auto px-4 py-8">
      <FeaturedContent />
      <CurrentStatus />
      {/* Main Content */}
      <Tabs defaultValue="trending" className="mb-12">
        <TabsList className="bg-gray-900">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="top">Top</TabsTrigger>
          <TabsTrigger value="art">Art</TabsTrigger>
          <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
        </TabsList>
        <TabsContent value="trending" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <NFTCard
                key={i}
                name={`Antlantis #${i + 1}`}
                collection="African Artifacts"
                price="2.5 ETH"
                image={`/placeholder.svg?height=300&width=300`}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

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
function NFTCard({ name, collection, price, image }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <div className="aspect-square relative">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-400 mb-2">{collection}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{price}</span>
          <Badge variant="secondary">Buy Now</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

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
