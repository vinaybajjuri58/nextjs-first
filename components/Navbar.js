import Link from "next/link";
export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
