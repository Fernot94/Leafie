import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Artworks() {
  const [items, setItems] = useState([]);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const setForm = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        code: code,
      }),
    };

    fetch("/api/reserve/", options)
      .then((response) => response.json())
      .catch((err) => console.error(err));

    setName("");
    setEmail("");
    setCode("");
  };

  return (
    <div className="primeira">
      <div className={styles.body}>
        <div className="artWork">
          <h3>Sofa Brass Red</h3>
          <img src="/img/1.png" />
          <p>
            Price: 20000€ <br />
            Code: 8r4ss
          </p>
        </div>
        <div className="artWork">
          <h3>Lampshade Cap Purple and White</h3>
          <img src="/img/2.png" />
          <p>
            Price: 5000€ <br />
            Code: pl4mp
          </p>
        </div>
        <div className="artWork">
          <h3>Amrchair Single Tennis Balls</h3>
          <img src="/img/3.png" />
          <p>
            Price: 1000€ <br />
            Code: t3nn1s
          </p>
        </div>
        <div className="artWork">
          <h3>Vinyl Chair</h3>
          <img src="/img/4.png" />
          <p>
            Price: 3000€ <br />
            Code: v1ny1ch
          </p>
        </div>
        <div className="artWork">
          <h3>Can Table Chair</h3>
          <img src="/img/5.png" />
          <p>
            Price: 35000€ <br />
            Code: c4nt4bl3
          </p>
        </div>
        <div className="artWork">
          <h3>Cardboard Sofa</h3>
          <img src="/img/6.png" />
          <p>
            Price: 45000€ <br />
            Code: c4rds0f4
          </p>
        </div>
        <div className="artWork">
          <h3>Grass Bottle Mini Table</h3>
          <img src="/img/7.png" />
          <p>
            Price: 7000€ <br />
            Code: gr455b0tt1e
          </p>
        </div>
        <div className="artWork">
          <h3>Drunk Table Wine</h3>
          <img src="/img/8.png" />
          <p>
            Price: 12000€ <br />
            Code: dr8nkt4ble
          </p>
        </div>
        <div className="artWork">
          <h3>Cork Armchair</h3>
          <img src="/img/9.png" />
          <p>
            Price: 20000€ <br />
            Code: c0rkch41r
          </p>
        </div>
        <div className="artWork">
          <h3>Lampshade Colourful Metallic Caps</h3>
          <img src="/img/10.png" />
          <p>
            Price: 25000€ <br />
            Code: m3t4ll1c4ps
          </p>
        </div>
        <div className="artWork">
          <h3>Cap Basket</h3>
          <img src="/img/11.png" />
          <p>
            Price: 17000€ <br />
            Code: c4pb4sk37
          </p>
        </div>
        <div className="artWork">
          <h3>Metallic Can Mirror</h3>
          <img src="/img/12.png" />
          <p>
            Price: 6500€ <br />
            Code: c4nm1rr0r
          </p>
        </div>
        <div className="artWork">
          <h3>Metallic Bowl</h3>
          <img src="/img/13.png" />
          <p>
            Price: 5000€ <br />
            Code: m3t41b0wl
          </p>
        </div>
        <div className="artWork">
          <h3>Barrel Rustic Cradle</h3>
          <img src="/img/14.png" />
          <p>
            Price: 35000€ <br />
            Code: m3t4lcr4dl3
          </p>
        </div>
        <div className="artWork">
          <h3>Modern Book Sofa</h3>
          <img src="/img/15.png" />
          <p>
            Price: 22000€ <br />
            Code: b00ks0f4
          </p>
        </div>
        <div className="artWork">
          <h3>Chair & Table Set</h3>
          <img src="/img/16.png" />
          <p>
            Price: 50000€ <br />
            Code: t4bl3ch41rs3t
          </p>
        </div>
        <div className="artWork">
          <h3>Balcony Set</h3>
          <img src="/img/17.png" />
          <p>
            Price: 15000€ <br />
            Code: b4lc0ny
          </p>
        </div>
        <div className="artWork">
          <h3>Pipe Coffee Table</h3>
          <img src="/img/18.png" />
          <p>
            Price: 8000€ <br />
            Code: p1p3c0ff33
          </p>
        </div>
        <div className="artWork">
          <h3>Ring Chandelier</h3>
          <img src="/img/19.png" />
          <p>
            Price: 3000€ <br />
            Code: r1n6ch4nd
          </p>
        </div>
        <div className="artWork">
          <h3>Colourful Cap Mirror</h3>
          <img src="/img/20.png" />
          <p>
            Price: 7000€ <br />
            Code: c0l0urc4pm1r
          </p>
        </div>
        <div className="artWork">
          <h3>Pallet Bed</h3>
          <img src="/img/21.png" />
          <p>
            Price: 50000€ <br />
            Code: p4ll3tb3d
          </p>
        </div>
      </div>
      <div className="reservationForm">
        <h2>
          If you want to reserve one of these art pieces of yourself, you can!
          All you have to do is fill this small form!
        </h2>
        <form className="makeReservation">
          <p>Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Email:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Code:</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <br />
          <button onClick={() => setForm()}>Submit</button>
        </form>
      </div>
    </div>
  );
}
