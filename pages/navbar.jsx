import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <div>
      <p className={styles.titulo}>Fábio Giordano</p>
      <span className={styles.menu}>
        <Link href="/">
          <a className={styles.titulo}>
            <button className={styles.button} disabled={router.asPath === "/"}>
              Home
            </button>
          </a>
        </Link>
        <Link href="/artworks">
          <a className={styles.titulo}>
            <button
              className={styles.button}
              disabled={router.asPath === "/artworks"}
            >
              Artwork
            </button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <button
              className={styles.button}
              disabled={router.asPath === "/about"}
            >
              About Me
            </button>
          </a>
        </Link>
        <Link href="/admin">
          <a>
            <button
              className={styles.button}
              disabled={router.asPath === "/admin"}
            >
              Admin
            </button>
          </a>
        </Link>
      </span>
    </div>
  );
}
