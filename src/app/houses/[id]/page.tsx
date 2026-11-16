import { Suspense } from "react";
import { houses } from "@/data/houses"; // use the same path your homepage uses
import BookingForm from "@/components/BookingForm";
import { supabase } from "@/lib/supabase";

export const instant = false;

type Props = { params: Promise<{ id: string }> };

export default async function HousePage({ params }: Props) {
  const { id } = await params;
  const house = houses.find((h) => h.id === id);
  if (!house) return <div>House not found</div>;

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <h1 className="text-3xl font-bold">{house.name}</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Request a booking</h2>
        <Suspense fallback={<div>Loading availability...</div>}>
          <BookedWrapper id={id} />
        </Suspense>
      </section>
    </div>
  );
}

async function BookedWrapper({ id }: { id: string }) {
  const { data: bookings } = await supabase
    .from("bookings")
    .select("check_in, check_out")
    .eq("house_id", id)
    .neq("status", "rejected");

  return <BookingForm houseId={id} booked={bookings ?? []} />;
}
