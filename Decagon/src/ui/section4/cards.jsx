import React from "react";
import styles from "./section4.module.css";

const Card1 = ({ program }) => {
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.img}>
          <img src={program.image} alt="img" />
        </div>
        <h1>{program.header}</h1>
        <p>{program.p}</p>
      </div>
    </>
  );
};

export default Card1;
