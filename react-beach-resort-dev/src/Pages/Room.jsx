import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import RoomContainer from "../Components/RoomsContainer/RoomsContainer";
//import React, { useState } from "react";

function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>

      <RoomContainer />
    </>
  );
}
// const handleConfirmBooking = async () => {
//   if (
//     bookingDetails.guestName &&
//     bookingDetails.phone &&
//     bookingDetails.checkInDate &&
//     bookingDetails.checkOutDate
//   ) {
//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingDetails),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         setIsBooked(true);
//         setIsBooking(false);
//       } else {
//         alert("Error booking room");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to book room");
//     }
//   } else {
//     alert("Please fill in all details before booking.");
//   }
// };

 export default Room;
