
// import React from "react";
// import { useHistory } from "react-router-dom"; // ✅ Import useHistory
// import { Link } from "react-router-dom"; // Import Link

// export default function Room({ room }) {
//   const { name, images, price, slug } = room;
//   const history = useHistory(); // ✅ Initialize useHistory

//   // ✅ Redirect to Booking Page
//   const handleBookNow = () => {
//     history.push("/booking"); // ✅ Redirect to Booking Page
//   };

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0]} alt={name} />
//         <div className="price-top">
//           <h6>${price}</h6>
//           <p>per night</p>
//         </div>

//         {/* Feature Button - Links to Room Details Page */}
//         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//           Feature
//         </Link>
//       </div>
//       <p className="room-info">{name}</p>

//       <button className="btn-primary" onClick={handleBookNow}>
//         Book Now
//       </button>
//     </article>
//   );
// }



import React from "react";
import { useHistory } from "react-router-dom";

export default function Room({ room }) {
  const history = useHistory();
  const { name, images, price } = room;

  const handleBookNow = () => {
    history.push({
      pathname: "/booking",
      state: { room }, // ✅ Pass room details
    });
  };

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
      </div>
      <p className="room-info">{name}</p>

      <button className="btn-primary" onClick={handleBookNow}>
        Book Now
      </button>
    </article>
  );
}
