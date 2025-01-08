import React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
