import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingPage from "../Trending";

// Dynamically import TrendingTable with no SSR

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <Tabs
      defaultValue="trending"
      className="w-full"
      onValueChange={(value) => setActiveTab(value)}
    >
      <TabsList>
        <TabsTrigger value="trending">Trending</TabsTrigger>
        <TabsTrigger value="top">Top</TabsTrigger>
        <TabsTrigger value="art">Art</TabsTrigger>
        <TabsTrigger value="Collectibles">Collectibles</TabsTrigger>
      </TabsList>
      <TabsContent value="trending">
        {activeTab === "trending" && <TrendingPage />}
      </TabsContent>
      <TabsContent value="top">
        {activeTab === "top" && "This is a Top page"}
      </TabsContent>
      <TabsContent value="art">
        {activeTab === "art" && "This is an Art page"}
      </TabsContent>
      <TabsContent value="Collectibles">
        {activeTab === "Collectibles" && "This is a Collectibles page"}
      </TabsContent>
    </Tabs>
  );
};

export default TabsNavigation;
