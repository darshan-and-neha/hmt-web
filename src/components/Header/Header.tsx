import styles from "./header.module.css";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a className={styles.logoText} href="/">
          Hire My Talent
        </a>
      </div>
      <Button
        className={styles.loginButton}
        variant="contained"
        size="small"
        color="error"
      >
        Login
      </Button>
    </header>
  );
};
