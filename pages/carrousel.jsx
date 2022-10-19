import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.css";

export default function Important() {
  return (
    <div>
      <h2>Most Relevant</h2>
      <Carousel>
        <div>
          <img src="/1.png" alt="image1" />
          <p className="foto">Image 1</p>
        </div>
        <div>
          <img src="/2.png" alt="image2" />
          <p className="foto">Image 2</p>
        </div>
        <div>
          <img src="/3.png" alt="image3" />
          <p className="foto">Image 3</p>
        </div>
        <div>
          <img src="/4.png" alt="image4" />
          <p className="foto">Image 4</p>
        </div>
        <div>
          <img src="/5.png" alt="image5" />
          <p className="foto">Image 5</p>
        </div>
      </Carousel>
    </div>
  );
}
export function ArtPieces() {
  return (
    <div>
      <h2>All Artworks</h2>
      <Carousel>
        <div className={styles.images}>
          <img src="/1.png" alt="image1" />
          <p className="foto">Image 1</p>
        </div>
        <div className={styles.images}>
          <img src="/2.png" alt="image2" />
          <p className="foto">Image 2</p>
        </div>
        <div>
          <img src="/3.png" alt="image3" />
          <p className="foto">Image 3</p>
        </div>
        <div>
          <img src="/4.png" alt="image4" />
          <p className="foto">Image 4</p>
        </div>
        <div>
          <img src="/5.png" alt="image5" />
          <p className="foto">Image 5</p>
        </div>
      </Carousel>
    </div>
  );
}
