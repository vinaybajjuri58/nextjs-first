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
        <li>
          <Link href="/products">
            <a>products</a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a>counter</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
