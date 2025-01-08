import Navbar from "@/pages/Header";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Footer */}
      <Footer />
    </div>
  );
}
