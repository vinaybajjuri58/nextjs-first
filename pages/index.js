import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header, Navbar } from "../components/HeaderComponent";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Trying NextJS" />
      <Link href="/about">
        <a>about</a>
      </Link>

      <h2>First NextJS App</h2>
    </div>
  );
}
