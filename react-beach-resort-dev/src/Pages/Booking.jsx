

// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// const Booking = () => {
//   const history = useHistory();
//   const [guestName, setGuestName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   console.log("🚀 Booking Component Loaded!");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log("🔍 Checking authentication... Token found:", token);
//     if (!token) {
//       alert("❌ You must log in to book a room!");
//       history.replace("/login");
//     }
//   }, [history]);

//   const handleBooking = async (e) => {
//     e.preventDefault();

//     if (!guestName || !phone || !checkInDate || !checkOutDate) {
//       setErrorMessage("⚠ All fields are required!");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5001/api/bookings", {
//         guestName,
//         phone,
//         checkInDate,
//         checkOutDate,
//       });

//       alert(`✅ Booking confirmed for ${guestName} from ${checkInDate} to ${checkOutDate}`);
//       history.push("/home");
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || "❌ Booking failed. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.authBox}>
//         <h2 style={styles.heading}>Book Your Stay</h2>
//         <form onSubmit={handleBooking} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             value={guestName}
//             onChange={(e) => setGuestName(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <input
//             type="tel"
//             placeholder="Enter Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <input
//             type="date"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <input
//             type="date"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>CONFIRM BOOKING</button>
//         </form>
//         {errorMessage && <p style={styles.error}>{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// // 🎨 **Matching Styles (Similar to Login Page)**
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     background: "linear-gradient(to right, rgb(253, 252, 250), rgb(252, 251, 249))",
//     fontFamily: "Poppins, sans-serif",
//   },
//   authBox: {
//     background: "rgba(255, 255, 255, 0.15)",
//     backdropFilter: "blur(10px)",
//     padding: "2rem",
//     borderRadius: "12px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     width: "350px",
//     color: "black",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "20px",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     margin: "8px 0",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     background: "rgba(255, 255, 255, 0.09)",
//     color: "black",
//     outline: "none",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "12px",
//     border: "none",
//     borderRadius: "6px",
//     background: "#BFA98D", // Matching your theme
//     color: "black",
//     fontSize: "18px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
//   buttonHover: {
//     background: "#45a049",
//   },
//   error: {
//     color: "#ff4d4d",
//     marginTop: "10px",
//   },
// };

// export default Booking;






import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const history = useHistory();
  const location = useLocation(); // ✅ Get passed room details
  const room = location.state?.room || { name: "Unknown Room", price: "N/A" };

  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log("🚀 Booking Component Loaded! Room:", room);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("❌ You must log in to book a room!");
      history.replace("/login");
    }
  }, [history]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!guestName || !phone || !checkInDate || !checkOutDate) {
      setErrorMessage("⚠ All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:5001/api/bookings", {
        guestName,
        phone,
        checkInDate,
        checkOutDate,
        roomName: room.name, // ✅ Send room name
      });

      alert(`✅ Booking confirmed for ${guestName} in ${room.name} from ${checkInDate} to ${checkOutDate}`);
      history.push("/home");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "❌ Booking failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Book {room.name}</h2> {/* ✅ Show room name */}
        <p style={styles.price}>Price: ${room.price} per night</p> {/* ✅ Show price */}

        <form onSubmit={handleBooking} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>CONFIRM BOOKING</button>
        </form>
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      </div>
    </div>
  );
};

// 🎨 **Matching Styles (Similar to Login Page)**
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, rgb(253, 252, 250), rgb(252, 251, 249))",
    fontFamily: "Poppins, sans-serif",
  },
  price: {
    fontSize: "20px",   // ✅ Increase size for better visibility
    fontWeight: "bold", // ✅ Make it bold
    color: "#333",      // ✅ Dark grey for better contrast
    marginBottom: "15px",
  },
  authBox: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
    color: "black",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.09)",
    color: "black",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#BFA98D", // Matching your theme
    color: "black",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  },
  error: {
    color: "#ff4d4d",
    marginTop: "10px",
  },
};

export default Booking;
