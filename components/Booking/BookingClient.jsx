"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";
import TableMap from "./TableMap";

const BookingClient = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <>
      <TableMap setSelectedTable={setSelectedTable} />

      <BookingForm selectedTable={selectedTable} />
    </>
  );
};

export default BookingClient;
