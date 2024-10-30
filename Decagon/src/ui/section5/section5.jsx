import styles from "./section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.section5}>
      <div className={styles.header}>
        <h1>Meet Our Team</h1>
      </div>
      <div className={styles.teams}>
        <div className={styles.team}>
          <img src="1.avif" alt="partner1" />
          <h3>Chika Nwobi</h3>
          <p>Founder & CEO</p>
        </div>
        <div className={styles.team}>
          <img src="2.avif" alt="partner2" />
          <h3>Francis Ogunlaja</h3>
          <p>Financial Controller</p>
        </div>
        <div className={styles.team}>
          <img src="3.avif" alt="partner3" />
          <h3>Ikenna Obianwu</h3>
          <p>Program Director Hr</p>
        </div>
        <div className={styles.team}>
          <img src="4.avif" alt="partner4" />
          <h3>Omowunmi Kasim</h3>
          <p>People & Process Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
