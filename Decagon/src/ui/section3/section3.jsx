import Cardss from "./cards.jsx";
import styles from "./section3.module.css";
import { programData } from "../../utils/programdata";

const Section3 = () => {
  return (
    <div className={styles.section3}>
      <div className={styles.text}>
        <h1>Our Training Programs</h1>
        <p>
          Our programs are highly intensive, designed to accelerate your
          proficiency levels within a few weeks.
        </p>
      </div>

      <div className={styles.cards}>
        {programData.map((program) => (
          <Cardss key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Section3;
