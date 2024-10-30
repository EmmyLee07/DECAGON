import styles from "./section8.module.css";

const Section8 = () => {
  return (
    <div className={styles.Section8}>
      <h1>Our Facility</h1>
      <p>
        Need a structured environment for learning? Our Lagos facility offers a
        physical space for immersive hybrid learning with access to internet,
        reliable power supply, and face-to-face collaboration.
        <br />
        <br /> Visit us at Orchid Road, Lekki peninsula, Lagos 106104, Lagos
        (Opposite Orchid hotel)
      </p>
      <div className={styles.imgg}>
        <div className={styles.imgs}>
          <img src="/12.avif" alt="img" />
        </div>
        <div className={styles.blockimg}>
          <div className={styles.img1}>
            <img src="/13.avif" alt="img" />
          </div>
          <div className={styles.img2}>
            <img src="/14.avif" alt="img" />
            <img src="/15.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
