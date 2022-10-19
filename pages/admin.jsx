import { useState } from "react";

export default function Admin() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const handleClick = () => {
    setCode(input);
  };
  return (
    <div>
      {code === "fabio" ? (
        <div className="mainAdmin">
          <h1>Admin Page</h1>
          <p>Reserved Items:</p>
        </div>
      ) : (
        <div>
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
