const BookingForm = ({ selectedTable }) => {
  return (
    <form className="flex flex-col gap-5 px-3">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className=" border p-3 mt-5 ml-3 mr-3 placeholder:text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border p-3 my-2 ml-3 mr-3 placeholder:text-white"
      />
      <input
        value={selectedTable ?? ""}
        type="number"
        name="table"
        placeholder="Table Number"
        required
        readOnly
        className="border p-3 my-2 ml-3 mr-3 placeholder:text-white"
      />

      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        min="1"
        required
        className="border p-3 my-2 ml-3 mr-3 placeholder:text-white"
      />

      {/* choose your night */}

      <input
        type="tel"
        name="phone"
        placeholder="Your Contact Number"
        required
        className="border p-3 my-2 ml-3 mr-3 placeholder:text-white"
      />

      <textarea
        type="text"
        name="your-comment"
        placeholder="Your Comment"
        required
        className="border p-3 my-2 ml-3 mr-3 placeholder:text-white"
      />

      <button type="submit" className="place-self-end border-y my-2 mr-4>">
        RESERVE
      </button>
    </form>
  );
};

export default BookingForm;
