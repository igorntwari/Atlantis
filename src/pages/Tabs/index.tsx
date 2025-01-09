import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const TabsNavigation = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="trending">Trending</TabsTrigger>
        <TabsTrigger value="top">Top</TabsTrigger>
        <TabsTrigger value="art">Art</TabsTrigger>
        <TabsTrigger value="Collectibles">Collectibles</TabsTrigger>
      </TabsList>
      <TabsContent value="trending">this is a trending page</TabsContent>
      <TabsContent value="top">this is a Top page</TabsContent>
      <TabsContent value="art">this is a art page</TabsContent>
      <TabsContent value="Collectibles">
        this is a Collectibles page
      </TabsContent>
    </Tabs>
  );
};

export default TabsNavigation;
