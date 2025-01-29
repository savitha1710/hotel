// import React, { useState } from "react";

// const Booking = () => {
//   const [roomType, setRoomType] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ roomType, checkIn, checkOut });
//     alert("Booking Confirmed!");
//   };

//   return (
//     <div>
//       <h2>Book a Room</h2>
//       <form onSubmit={handleSubmit}>
//         <select value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
//           <option value="">Select Room Type</option>
//           <option value="single">Single Room</option>
//           <option value="double">Double Room</option>
//         </select>
//         <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
//         <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
//         <button type="submit">Book Now</button>
//       </form>
//     </div>
//   );
// };

// export default Booking;











import React, { useState } from "react";
import "../styles.css"; // Import global styles

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [roomType, setRoomType] = useState("single");
  const [errorMessage, setErrorMessage] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    if (!name || !email || !date) {
      setErrorMessage("All fields are required!");
      return;
    }

    setErrorMessage("");
    alert(`Booking confirmed for ${name} on ${date}`);
  };

  return (
    <div className="auth-container">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleBooking}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="suite">Suite</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Booking;
