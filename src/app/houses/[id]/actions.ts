"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function createBooking(formData: FormData) {
  const id = formData.get("house_id") as string;
  const guest_name = formData.get("guest_name") as string;
  const guest_email = formData.get("guest_email") as string;
  const check_in = formData.get("check_in") as string;
  const check_out = formData.get("check_out") as string;
  const guests = Number(formData.get("guests"));

  // 1. check for overlap
  const { data: conflicts } = await supabase
    .from("bookings")
    .select("id")
    .eq("house_id", id)
    .neq("status", "rejected")
    .lt("check_in", check_out)
    .gt("check_out", check_in);

  if (conflicts && conflicts.length > 0) {
    return { error: "Those dates are already booked. Try different dates." };
  }

  // 2. insert
  const { error } = await supabase.from("bookings").insert({
    house_id: id,
    guest_name,
    guest_email,
    check_in,
    check_out,
    guests,
    status: "new",
  });

  if (error) return { error: error.message };
  return { success: true };
}
