import React from "react";
import styles from "./section6.module.css";

const Carrd = ({ program }) => {
  return (
    <>
      <div className={styles.Carrd}>
        <img src={program.image} alt="img" />
        <h2>{program.name}</h2>
        <p>{program.description}</p>
        <p>{program.a}</p>
        <p>{program.b}</p>
        <nav>"{program.p}"</nav>
      </div>
    </>
  );
};

export default Carrd;
