import React from "react";
import styles from "./section3.module.css";
import { FaCheck } from "react-icons/fa";

const Cardss = ({ program }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={program.image} alt="img1" />
          <h1>{program.header}</h1>
          <p>{program.p}</p>
        </div>
        <div className={styles.card_content}>
          <div className={styles.price}>
            <p>
              Starting at <span>{program.price}</span>
            </p>
          </div>
          <div className={styles.others}>
            <p>
              <span>Program starts:</span> {program.date}
              <br />
              <span>Duration:</span> {program.duration} Weeks <br />
              <span>Mode of Delivery:</span> <br />
              <nav>
                <span>
                  <FaCheck />
                </span>
                Fully Online
                <br />
                <span>
                  <FaCheck />
                </span>
                Hybrid (Online & 2 days per week in Facility)
              </nav>
              <span>Time commitment:</span> At least {program.time} hours daily
            </p>
          </div>
        </div>
        <button>View more & Register</button>
      </div>
    </>
  );
};

export default Cardss;
