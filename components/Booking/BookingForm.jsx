"use client";

const BookingForm = () => {
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border border-gray-500 p-3 text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border border-gray-500 p-3 text-white"
      />
      <input
        type="number"
        name="table"
        placeholder="Table Number"
        required
        className="w-full border border-gray-500 p-3 text-white"
      />

      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        min="1"
        required
        className="w-full border border-gray-500 p-3 text-white"
      />

      {/* choose your night */}

      <input
        type="tel"
        name="phone"
        placeholder="Your Contact Number"
        required
        className="w-full border border-gray-500 p-3 text-white"
      />
      <textarea
        type="text"
        name="your-comment"
        placeholder="Your Comment"
        required
        className="w-full border border-gray-500 p-3 text-white"
      />
      <button type="submit" className="border">
        RESERVE
      </button>
    </form>
  );
};

export default BookingForm;
