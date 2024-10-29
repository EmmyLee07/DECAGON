import React from "react";
import styles from "./section4.module.css";

const Card1 = () => {
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.img}>
          <img src="/sc-icon.6f0dbd6a.svg" alt="img" />
        </div>
        <h1>Superior Curriculum</h1>
        <p>
          Superior curriculum delivered by well-experienced engineers and
          trainers in the industry.
        </p>
      </div>
    </>
  );
};

export default Card1;
