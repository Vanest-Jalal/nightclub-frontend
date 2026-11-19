import Image from "next/image";
import BookingClient from "@/components/Booking/BookingClient";

export default function BookingPage() {
  return (
    <main>
      <h1 className="my-3 ml-5">BOOK TABLE</h1>
      <BookingClient />
    </main>
  );
}
