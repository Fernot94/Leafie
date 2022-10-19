import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.menu}>
        <Link href="/">
          <a className={styles.titulo}>Fábio Giordano
            <button className={styles.button} disabled={router.asPath === "/"}>Admin</button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <button className={styles.button} disabled={router.asPath === "/about"}>About Me</button>
          </a>
        </Link>
        <Link href="/admin">
          <a>
            <button className={styles.button} disabled={router.asPath === "/admin"}>Home</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
