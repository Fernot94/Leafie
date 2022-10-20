import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function MenuSobre() {
  return (
    <div className={styles.mainAbout}>
      <h1>About Me</h1>
      <img className="creatorsPic" src="/img/homem.png" />
      <ul>
        <li>My name is Fabio Giordano and I created my brand because I believe that we would all live better if everyone recycled what they don't use so that the world would be better for the next generations.  </li>
        <p></p>
      </ul>
    </div>
  );
}
