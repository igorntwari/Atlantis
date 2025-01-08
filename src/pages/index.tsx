import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Search,
  Wallet,
  Menu,
  TrendingUp,
  Zap,
  Clock,
  FlameIcon as Fire,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-bold">Antlantis</h1>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-300 hover:text-white">
                  Collections
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Activity
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Rankings
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block relative w-72">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search items and collections"
                  className="pl-10 bg-gray-900 border-gray-800"
                />
              </div>
              <Button variant="outline" className="hidden md:flex gap-2">
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </header>

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
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    All NFTs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Art
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Collectibles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Domain Names
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Platform Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Ventures
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Grants
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Stats</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Rankings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Activity
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Antlantis. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
