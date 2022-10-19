import { useState } from "react";

export default function Admin() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const handleClick = () => {
    setCode(input);
  };
  return (
    <div>
      <div>
        <p>Enter Artist Backoffice Code</p>
        <div className="inputBox">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>Log In</button>
        </div>
      </div>
    </div>
  );
}
