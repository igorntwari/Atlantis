import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Menu, Search, ShoppingCart, User, Wallet, X } from "lucide-react";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNavigation = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <section>
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={openMobileNavigation}
              >
                {isMobileNavOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
              <h1 className="text-2xl font-bold">Atlantis</h1>
              <div className="hidden lg:flex items-center gap-6">
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
              <div className="hidden lg:block relative w-72">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search items and collections"
                  className="pl-10 bg-gray-900 border-gray-800"
                />
              </div>
              <Button variant="outline" className="hidden lg:flex gap-2">
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </Button>
              <div className="flex space-x-6 cursor-pointer">
                <User />
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMobileNavOpen && (
        <nav className="lg:hidden bg-gray-900 text-gray-300">
          <div className="container mx-auto px-4 py-4">
            <div className="relative">
              <Input
                placeholder="Search items and collections"
                className="bg-gray-900 border-gray-800"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <a href="#" className="block py-2 hover:text-white">
              Collections
            </a>
            <a href="#" className="block py-2 hover:text-white">
              Activity
            </a>
            <a href="#" className="block py-2 hover:text-white">
              Rankings
            </a>
          </div>
        </nav>
      )}
    </section>
  );
};

export default Navbar;
