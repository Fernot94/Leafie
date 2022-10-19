import { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Important, { ArtPieces } from "./carrousel";

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
        <Important />
        <h4>Searchbar opcional</h4>
        <ArtPieces />
      </div>
    </div>
  );
}