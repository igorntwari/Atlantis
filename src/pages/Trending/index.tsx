import { trendingNFTs } from "../../datas/Trendings";

function TrendingPage() {
  const midIndex = Math.ceil(trendingNFTs.length / 2);
  const column1 = trendingNFTs.slice(0, midIndex);
  const column2 = trendingNFTs.slice(midIndex);

  return (
    <section className="px-4">
      <div className="flex justify-between gap-x-24 text-bold text-gray-500">
        <div className="w-1/2">
          <div className="flex justify-between items-center gap-x-8 ">
            <span className="w-10">Rank</span>
            <span className="flex-1">Collection</span>
            <span className="w-32 text-center">Floor Price</span>
            <span className="w-32 text-center">Volume</span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex justify-start items-center gap-x-8">
            <span className="w-10">Rank</span>
            <span className="flex-1">Collection</span>
            <span className="w-32 text-center">Floor Price</span>
            <span className="w-32 text-center">Volume</span>
          </div>
        </div>
      </div>

      {/* Data Rows */}
      <div className="flex gap-x-24 mt-4">
        {/* Column 1 */}
        <div className="w-1/2">
          {column1.map((nft, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-x-8 text-xl py-4"
            >
              <span className="w-10">{index + 1}</span>
              <span className="flex-1">{nft.collection}</span>
              <span className="w-32 text-center">{nft.floorPrice}</span>
              <span className="w-32 text-center">{nft.volume}</span>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="w-1/2">
          {column2.map((nft, index) => (
            <div
              key={midIndex + index}
              className="flex justify-start items-center gap-x-8 text-xl py-4"
            >
              <span className="w-10">{midIndex + index + 1}</span>
              <span className="flex-1">{nft.collection}</span>
              <span className="w-32 text-center">{nft.floorPrice}</span>
              <span className="w-32 text-center">{nft.volume}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingPage;
