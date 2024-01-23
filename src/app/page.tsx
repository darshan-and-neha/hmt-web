import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Footer />
    </main>
  );
}
