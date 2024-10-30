import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to Nigeria’ #1</h1>
      <div className={styles.btn}>
        <button>Tech Training</button>
      </div>
      <h1>Institute</h1>
      <div className={styles.grayp}>
        <p>
          We transform talented individuals into world-class tech stars and help
          them <br />
          maximize their potential.
        </p>
      </div>
      <p>
        If you are looking for a structured & well-guided pathway for
        accelerating your tech
        <br /> journey, you are in the right place
      </p>
      <button>Enroll in a Program</button>
      <div className={styles.img}>
        <img src="coverPicture.svg" alt="coverpix" />
      </div>
    </div>
  );
};

export default Hero;
