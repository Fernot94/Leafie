import styles from "../styles/Home.module.css";
import ResponsiveCarousel from "./responsiveCarousel";

export default function Home() {
  return (
    <div className={styles.mainIndex}>
      <div className="homeTitle">
        <img src="/logo/logo.png" />
      </div>
      <div className="homeExpo">
        <h3>About the Exhibition</h3>
        <p>Placeholder About</p>
      </div>
      <div className={styles.homeProducts}>
        <center>
          <ResponsiveCarousel />
        </center>
      </div>
      <br />
      <div className="mainPartners">
        <h3>Partners</h3>
        <img src="/partners/partners.png" />
      </div>
    </div>
  );
}
