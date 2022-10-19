import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <div className="homeTitle">
        <h1>Leafie</h1>
      </div>
      <div className="homeExpo">
        <h3>About Exposition</h3>
      </div>
      <div className="homeProducts">
        <h3>Produtos</h3>
        <h1>Sidescroller com produtos principais</h1>
        <h4>Searchbar opcional</h4>
        <h1>Sidescroller com todos os produtos</h1>
      </div>
    </div>
  );
}
