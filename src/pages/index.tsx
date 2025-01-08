import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TrendingUp, Zap, Clock, FlameIcon as Fire } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/pages/Header";
import Footer from "@/pages/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Featured Collection"
              width={1200}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-4xl font-bold mb-2">Featured Collection</h2>
              <p className="text-gray-300 mb-4">
                Discover the most extraordinary digital assets
              </p>
              <Button className="bg-white text-black hover:bg-gray-200">
                View Collection
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={<TrendingUp className="h-5 w-5" />}
            label="Volume 24h"
            value="12,345 ETH"
          />
          <StatCard
            icon={<Zap className="h-5 w-5" />}
            label="Floor Price"
            value="2.5 ETH"
          />
          <StatCard
            icon={<Fire className="h-5 w-5" />}
            label="Items"
            value="10,000"
          />
        </section>

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

      {/* Footer */}
      <Footer />
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-800 rounded-lg">{icon}</div>
          <div>
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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
