import styles from "./section9.module.css";
import { FaCheck } from "react-icons/fa";

const Section9 = () => {
  return (
    <div className={styles.Section9}>
      <h1>Our Partner Schools in America</h1>
      <div className={styles.comp}>
        <div className={styles.h3}>
          <h3>Indiana Tech</h3>
          <p>
            Indiana Institute of Technology is a renowned private college of
            technology focused on providing world-class education to individuals
            in the tech sector.Located in Fort Wayne, IIT offers students a
            welcoming and diverse community in the heart of the Midwest.
            <br />
            <br /> The college of professional studies is dedicated to
            empowering busy, working-class adults like yourself to pursue your
            master's degree in tech while balancing professional and personal
            life.
          </p>
          <div className={styles.itext}>
            <h4>
              <i>Available courses for Tech Masters include:</i>
            </h4>
            <p>
              <span>
                <FaCheck />
              </span>
              MS in Engineering Management
            </p>
            <p>
              <span>
                <FaCheck />
              </span>
              STEM MBA in Business Analytics
            </p>
            <p>
              <span>
                <FaCheck />
              </span>
              MS in Cybersecurity
            </p>
            <p>
              <span>
                <FaCheck />
              </span>
              MS in Information Systems
            </p>
            <nav>
              With flexible programs to meet your needs and commitment to real
              world applications, Indiana Tech prepares you to excel in tech and
              advance your career.
              <br />
              <br />
              Overall, Indiana Tech provides a supportive and enriching
              educational environment where students can pursue their academic
              and professional goals while enjoying the benefits of a close-knit
              community and access to major metropolitan areas.
              <br />
              <br /> Some Nearby major cities include Chicago, Indianapolis,
              Columbus and Detroit.
            </nav>
          </div>
        </div>
        <div className={styles.img}>
          <img src="/indiana_school_ity7u1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section9;
