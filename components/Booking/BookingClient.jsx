"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";

const BookingClient = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  return <BookingForm selectedTable={selectedTable} />;
};

export default BookingClient;
