import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const index = () => {
  return (
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
  );
};

export default index;
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
