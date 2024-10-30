import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img src="/decagon-light.7b9918db.svg" alt="logo" />
      <hr />
      <div className={styles.text}>
        <p>&copy; 2024 Decagon Institute. All rights reserved</p>
        <p>Contact us: recruit@decagonhq.com or 07080992833</p>
        <div className={styles.links}>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
