import Button from "@/components/atoms/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Eventica</h1>
      <Button>Sign In</Button>
    </header>
  );
}