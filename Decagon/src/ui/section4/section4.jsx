import styles from "./section4.module.css";
import Card1 from "./cards.jsx";

const Section4 = () => {
  return (
    <div className={styles.section4}>
      <div className={styles.header}>
        <h1>Why you choose us</h1>

        <Card1 />
      </div>
    </div>
  );
};

export default Section4;
