import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/decagonLogo.dac18364.svg" alt="logo" />
      </div>
      <div className={styles.enroll}>
        <button>Enroll a Program</button>
      </div>
    </header>
  );
};

export default Header;
