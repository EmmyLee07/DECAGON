import styles from "./section6.module.css";
import Carrd from "./cards.jsx";
import { aluminiData } from "../../utils/aluminidata.js";

const Section6 = () => {
  return (
    <div className={styles.Section6}>
      <h1>Meet some of our Decagon Alumni (Decadevs)</h1>
      <div className={styles.cards}>
        {aluminiData.map((program) => (
          <Carrd key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Section6;
