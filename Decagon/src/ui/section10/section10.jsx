import styles from "./section10.module.css";
import { FaCheck } from "react-icons/fa";

const Section10 = () => {
  return (
    <div className={styles.Section10}>
      <div className={styles.Section10img}>
        <img src="/uncw_school_ng0ug1.svg" alt="img" />
      </div>
      <div className={styles.Section10text}>
        <h1>University of North Carolina</h1>
        <p>
          The University of North Carolina, Wilmington where academic excellence
          meets accessibility. UNCW is dedicated to providing a transformative
          educational experience for individuals like your child who are seeking
          to further their career through a masters degree.
          <br />
          <br /> Located in the vibrant coastal city of Wilmington, North
          Carolina, UNCW offers students the unique opportunity to pursue higher
          education in a picturesque beach town setting.
        </p>
        <div className={styles.textt}>
          <h4>
            <i>M.Sc. programs available to Tech Masters include:</i>
          </h4>
          <p>
            <span>
              <FaCheck />
            </span>
            MSc in Computer Science and Information Systems
          </p>
          <p>
            <span>
              <FaCheck />
            </span>
            MSc in Data Science
          </p>
        </div>
        <div className={styles.nav}>
          <nav>
            With a focus on innovation and inclusivity, the graduate program at
            UNCW offers flexible options tailored to accommodate your very busy
            schedule and personal commitments.
            <br />
            <br /> The area's pristine beaches and favorable weather conditions
            make it a popular destination for water sports enthusiasts, offering
            a perfect balance between academic pursuits and leisure activities.
            <br />
            <br /> Some major nearby cities include; Raleigh, Durham,
            Greensboro, and Charlotte.
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Section10;
