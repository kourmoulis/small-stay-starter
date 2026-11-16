export type House = {
  id: string;
  name: string;
  name_el: string;
  capacity: number;
  price: number;
  image: string;
  description: string;
  description_el: string;
};

export type Booking = {
  id?: string;
  house_id: string;
  guest_name: string;
  guest_email: string;
  check_in: string;
  check_out: string;
  guests: number;
  status: 'new' | 'approved' | 'rejected';
  created_at?: string;
};