"use client";
import { createBooking } from "@/app/houses/[id]/actions";
import { useState } from "react";

type BookedRange = {
  check_in: string;
  check_out: string;
};

type BookingFormProps = {
  houseId: string;
  booked: BookedRange[];
};

export default function BookingForm({ houseId, booked }: BookingFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await createBooking(formData);
    if (result?.error) {
      alert(result.error);
    } else {
      alert("Request sent!");
    }
    setLoading(false);
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input type="hidden" name="house_id" value={houseId} />

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          name="guest_name"
          type="text"
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          name="guest_email"
          type="email"
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Check-in</label>
          <input
            name="check_in"
            type="date"
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Check-out</label>
          <input
            name="check_out"
            type="date"
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Guests</label>
        <input
          name="guests"
          type="number"
          min={1}
          className="w-full rounded border px-3 py-2"
          required
        />
      </div>

      {booked.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Already booked:{" "}
          {booked.map((b) => `${b.check_in} → ${b.check_out}`).join(", ")}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Sending…" : "Send booking request"}
      </button>
    </form>
  );
}
