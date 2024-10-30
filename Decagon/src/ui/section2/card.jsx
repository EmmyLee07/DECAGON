import styles from "./section2.module.css";
import gateway1 from "/mentor.svg";
import gateway2 from "/abroad_wb0aeb.svg";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card1}>
        <h1>Gateway1</h1>
        <h2>Intensive Tech Training</h2>
        <p>
          Become a competent tech star through Decagon's elite training program.
        </p>
        <img src={gateway1} alt="Mentor" />
      </div>
      <div className={styles.card2}>
        <h1>Gateway2</h1>
        <h2>Study Abroad</h2>
        <p>
          Receive free guidance & coaching on tech-master's
          <br /> applications to our partner American universities, education
          <br />
          loan applications, and American student visa applications &<br />
          interviews, to enable you resume for your Master's degree
          <br /> program in America by next year (2025).
        </p>
        <img src={gateway2} alt="Abroad" />
      </div>
    </div>
  );
};
export default Cards;
