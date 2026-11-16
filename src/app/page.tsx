import { houses } from "@/data/houses";
import HouseCard from "@/components/HouseCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Small Stay Starter</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Minimal booking template for small accommodations in Greece.
          Browse houses, book dates, manage from dashboard.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <Link
            href="#houses"
            className="px-5 py-2.5 rounded-xl bg-black text-white text-sm"
          >
            View houses
          </Link>
          <Link
            href="/admin"
            className="px-5 py-2.5 rounded-xl border text-sm"
          >
            Owner dashboard
          </Link>
        </div>
      </section>

      <section id="houses" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {houses.map((h) => (
          <HouseCard key={h.id} house={h} />
        ))}
      </section>
    </main>
  );
}