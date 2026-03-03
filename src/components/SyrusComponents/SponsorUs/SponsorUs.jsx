import styles from "./SponsorUs.module.css";

function SponsorUs() {
  return (
    <section id="sponsorsus" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainCard}>
          <h1 className={styles.title}>Want to Help Us?</h1>
          <p className={styles.subtitle}>
            With great power comes great responsibility - Help us empower the
            next generation of tech heroes
          </p>

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Monetary Sponsorships</h3>
              <p>
                Direct financial contributions to support the event, helping us
                swing to new heights!
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>In-Kind Sponsorships</h3>
              <p>
                Non-monetary support such as food, merchandise, software tools,
                or other resources that can enhance the hackathon experience.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Internship Offers</h3>
              <p>
                Opportunities for participants to gain hands-on industry
                experience through internships provided by sponsors.
              </p>
            </div>
          </div>

          <div className={styles.buttonsWrapper}>
            <a href="https://drive.google.com/file/d/1ZPO1ehM4UrMMXE9x8frPdxAhB3xNiaaM/view?usp=sharing">
              <button className={styles.button}>Sponsorship Prospectus</button>
            </a>
            <a href="https://drive.google.com/file/d/1j03-yU3bezuXrNIxKj4Y3b2Dql9uTPTN/view?usp=sharing">
              <button className={styles.button}>Syrus Brochure</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorUs;
