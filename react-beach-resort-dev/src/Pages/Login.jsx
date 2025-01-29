// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    const [errorMessage, setErrorMessage] = useState("");
//    const navigate = useNavigate();

//    const handleLogin = (e) => {
//       e.preventDefault();
//       if (email === "test@example.com" && password === "password123") {
//          // Redirect on successful login
//          navigate("/dashboard");
//       } else {
//          // Show error message on invalid login
//          setErrorMessage("Invalid credentials");
//       }
//    };

//    return (
//       <div>
//          <h2>Login Page</h2>
//          <form onSubmit={handleLogin}>
//             <div>
//                <label>Email:</label>
//                <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                />
//             </div>
//             <div>
//                <label>Password:</label>
//                <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                />
//             </div>
//             <button type="submit">Login</button>
//          </form>
//          {errorMessage && <p>{errorMessage}</p>}
//       </div>
//    );
// };

// export default Login;











// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// const Login = () => {
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    const [errorMessage, setErrorMessage] = useState("");
//    const history = useHistory();  // ✅ Use history instead of useNavigate

//    const handleLogin = (e) => {
//       e.preventDefault();
//       if (email === "test@example.com" && password === "password123") {
//          history.push("/dashboard"); // ✅ Use history.push() instead of navigate()
//       } else {
//          setErrorMessage("Invalid credentials");
//       }
//    };

//    return (
//       <div>
//          <h2>Login Page</h2>
//          <form onSubmit={handleLogin}>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Login</button>
//          </form>
//          {errorMessage && <p>{errorMessage}</p>}
//       </div>
//    );
// };

// export default Login;





// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import "../styles.css"; // Import the styles

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const history = useHistory();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "test@example.com" && password === "password123") {
//       history.push("/dashboard");
//     } else {
//       setErrorMessage("Invalid credentials");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "test@example.com" && password === "password123") {
//       history.push("/dashboard");
//     } else {
//       setErrorMessage("Invalid credentials");
//     }
//   };

const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
  
    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      history.push("/home"); // Redirect
    } else {
      setErrorMessage("Invalid credentials");
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.authBox}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right,rgb(249, 249, 249),rgb(246, 247, 250))",
    fontFamily: "Poppins, sans-serif",
  },
  authBox: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
    color: "",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
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
    background: "#BFA98D",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    background: "#45a049",
  },
  error: {
    color: "#ff4d4d",
    marginTop: "10px",
  },
};

export default Login;
