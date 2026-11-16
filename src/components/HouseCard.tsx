import Link from "next/link";
import Image from "next/image";
import { House } from "@/data/houses";

export default function HouseCard({ house }: { house: House }) {
  return (
    <Link
      href={`/houses/${house.id}`}
      className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="relative h-52 w-full">
        <Image
          src={house.image}
          alt={house.name}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{house.name}</h3>
        <p className="text-sm text-black line-clamp-2 mt-1 card">
          {house.description}
        </p>
        <div className="flex items-center justify-between mt-3 text-sm">
          <span className="font-medium text-black">€{house.price} / night</span>
          <span className="text-black">Up to {house.capacity} guests</span>
        </div>
      </div>
    </Link>
  );
}
