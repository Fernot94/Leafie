import { useState } from "react";
import { useEffect } from "react";

export default function Artworks() {
  const [items, setItems] = useState();
  const [link, setLink] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
    };

    fetch("/api/product", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => setItems(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mainArtworks">
      <div className="artPieces">{/* <p>{items._id}</p> */}</div>
    </div>
  );
}
