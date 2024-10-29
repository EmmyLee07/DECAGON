import styles from "./section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.section1_text}>
        <h1>
          We have produced over <span>1000</span> successful software engineers
          in just 5 years.
        </h1>
        <p>
          Decagon was founded in 2018 by Chika Nwobi a tech industry investor
          and venture builder who has built and backed companies like Jobberman,
          Autocheck, Bamboo and Gokada.
        </p>
        <br />
        <p>
          We help high-potential talent launch their careers in tech through our
          intensive training programs.
        </p>
        <br />
        <p>
          Decagon has over 1000 alumni working with top companies like JP
          Morgan, Interswitch, Microsoft, Flutterwave, etc.
        </p>
        <br />
        <p>
          Join a vibrant legacy of success with our Alumni Community, where
          members offer mutual support to foster continuous growth and career
          advancement.
        </p>
      </div>
      <div className={styles.section1_img}>
        <img src="/poductPic.svg" alt="profile_pix" />
      </div>
    </div>
  );
};

export default Section1;
