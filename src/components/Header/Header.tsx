import styles from "./header.module.css";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">HMT</a>
      </div>
      <Button className={styles.loginButton} variant="outlined">
        Login
      </Button>
    </header>
  );
};
