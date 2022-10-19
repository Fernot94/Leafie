import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navMain">
      <div className="navTabs">
        <Link href="/home">
          <a>
            <button disabled={router.asPath === "/home"}>Home</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
