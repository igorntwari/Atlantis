import { Button } from "@/components/ui/Button";
import Image from "next/image";
function FeaturedContent() {
  return (
    <section className="mb-12">
      <div className="relative h-[500px] rounded-lg overflow-hidden">
        <Image
          src="/assets/images/featured-image.jpg"
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
  );
}

export default FeaturedContent;
