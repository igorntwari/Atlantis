import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, FlameIcon as Fire } from "lucide-react";

function StatCard({ icon, label, value }) {
  return (
    <Card className="bg-gray-900 border-gray-800 bg0">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg">{icon}</div>
          <div>
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CurrentStatus() {
  const statusData = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: "Volume 24h",
      value: "12,345 ETH",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: "Floor Price",
      value: "2.5 ETH",
    },
    {
      icon: <Fire className="h-5 w-5" />,
      label: "Items",
      value: "10,000",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {statusData.map((status, index) => (
        <StatCard
          key={index}
          icon={status.icon}
          label={status.label}
          value={status.value}
        />
      ))}
    </section>
  );
}

export default CurrentStatus;
