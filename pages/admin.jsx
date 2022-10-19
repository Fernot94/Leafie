import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Admin() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [reservations, setReservations] = useState([]);

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  fetch("/api/reserve", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .then((response) => setReservations(response))
    .catch((err) => console.error(err));

  const handleClick = () => {
    setCode(input);
  };
  return (
    <div>
      {code === "fabio" ? (
        <div className="mainAdmin">
          <h1>Admin Page</h1>
          <p>Reserved Items:</p>
          {/* <p>{reservations}</p> */}
        </div>
      ) : (
        <div className={styles.mainIndex}>
          <p>Enter Artist Backoffice Code</p>
          <div className="inputBox">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button onClick={handleClick}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
}
