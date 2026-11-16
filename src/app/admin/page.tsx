"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Booking } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const total = bookings.length;
  const pending = bookings.filter((b) => b.status === "new").length;
  const approved = bookings.filter((b) => b.status === "approved").length;

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setBookings(data as Booking[]);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function setStatus(id: string, status: "approved" | "rejected") {
    await supabase.from("bookings").update({ status }).eq("id", id);
    load();
  }

  if (loading) return <div className="p-8">Loading bookings...</div>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{total}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{pending}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Approved</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{approved}</CardContent>
        </Card>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Bookings - Owner Dashboard</h1>

        {bookings.length === 0 && <p>No bookings yet.</p>}

        <div className="space-y-3">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="border rounded p-4 flex justify-between items-center"
            >
              <div>
                <div className="font-semibold">
                  {b.guest_name} - {b.house_id}
                </div>
                <div className="text-sm text-gray-600">
                  {b.check_in} → {b.check_out} | {b.guests} guests |{" "}
                  {b.guest_email}
                </div>
                <div className="text-xs mt-1">
                  Status: <strong>{b.status}</strong>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => b.id && setStatus(b.id, "approved")}
                  className="px-3 py-1 text-sm rounded bg-emerald-600 text-white"
                >
                  Approve
                </button>
                <button
                  onClick={() => b.id && setStatus(b.id, "rejected")}
                  className="px-3 py-1 text-sm rounded bg-red-600 text-white"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
