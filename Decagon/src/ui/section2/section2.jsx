import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.Section2}>
      <h1>Our Double-G Bundle Service</h1>
      <div className={styles.imgg}>
        <img src="/doubleg_black.39e29f10.svg" alt="img" />
        <span>by</span>
        <img src="/decagonLogo.dac18364.svg" alt="logo" />
      </div>
      <p>
        With our Double-G (Double Gateway) bundle service, when you enroll for
        any of our Training Programs, you also get access to a complimentary
        (free) service of guidance and coaching on admission processing to study
        a master's degree program in any of our partner schools abroad.
      </p>
      <div className={styles.grayp}>
        <p>
          You get access to free guidance & coaching on school applications,
          securing student loan, and student visa applications & interviews.
        </p>
      </div>
    </div>
  );
};

export default Section2;
