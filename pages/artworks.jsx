import { useState } from "react";
import { useEffect } from "react";

export default function Artworks() {
  const [items, setItems] = useState([]);
  const [link, setLink] = useState("");

  //   useEffect(() => {
  //     const options = {
  //       method: "GET",
  //     };
  //     fetch("/api/populate", options)
  //       .then((response) => response.json())
  //       .then((response) => setItems(response.tables))
  //       .catch((err) => console.error(err));
  //   }, []);

  return (
    <div className="mainArtworks">
      <div className="artPieces">
        <h3>Sofa Brass Red</h3>
        <img src="/img/1.png" />
        <p>
          Description <br />
          Price: 20000€ <br />
          ID: 8r4ss
        </p>
      </div>
    </div>
  );
}
