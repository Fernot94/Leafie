import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navMain">
      <div className="navTabs">
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
