import styles from "./section9.module.css";

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
        </div>
        <div className={styles.img}>
          <img src="/indiana_school_ity7u1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section9;
