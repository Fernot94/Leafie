import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import CarouselSimples from "./simplycarousel";

export default function Home() {
  return (
    <div className={styles.mainIndex}>
      <div className="homeTitle">
        <img src="/logo/logo.png" />
      </div>
      <div className="homeExpo">
        <h3>About the Exhibit</h3>
        <p>Placeholder About</p>
      </div>
      <div className="homeProducts">
        <CarouselSimples />
      </div>
      <br />
      <div className="mainPartners">
        <h3>Partners</h3>
        <img src="/partners/partners.png" />
      </div>
    </div>
  );
}
