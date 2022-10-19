import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.menu}>
      <div className={styles.menu}>
        <Link href="/">
          <a>
            <button disabled={router.asPath === "/"}>Home</button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <button disabled={router.asPath === "/about"}>About Me</button>
          </a>
        </Link>
        <Link href="/admin">
          <a>
            <button disabled={router.asPath === "/admin"}>Admin</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
