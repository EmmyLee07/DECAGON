import styles from "./section4.module.css";
import Card1 from "./cards.jsx";
import { chooseData } from "../../utils/choosedata.js";

const Section4 = () => {
  return (
    <div className={styles.section4}>
      <div className={styles.header}>
        <h1>Why you choose us</h1>
      </div>
      <div className={styles.cards}>
        {chooseData.map((program) => (
          <Card1 key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
