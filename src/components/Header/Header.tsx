import styles from "./header.module.css";
import { Button } from "@mui/material";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <Image
            src={"/assets/hmt-cropped-nobg.png"}
            alt="hmt logo image"
            width={90}
            height={50}
          />
        </a>
        {/* <a className={styles.logoText} href="/">
          Hire My Talent
        </a> */}
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
