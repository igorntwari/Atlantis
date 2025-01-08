import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Menu, Search, Wallet } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <section>
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-bold">Atlantis</h1>
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
    </section>
  );
};

export default Navbar;
