import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import CarouselSimples from "./simplycarousel";

export default function Home() {
  return (
    <div className={styles.mainIndex}>
      <div className="homeTitle">
        <h1>Leafie</h1>
      </div>
      <div className="homeExpo">
        <h3>About Exposition</h3>
        <p>Placeholder About</p>
      </div>
      <div className="homeProducts">
        <h3>Artwork</h3>
        <CarouselSimples />
      </div>
    </div>
  );
}
