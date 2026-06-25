import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <div className={styles.homeButton}>
  <Link to="/home">← Home</Link>
</div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
          alt="Our Mission"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <h4>OUR MISSION</h4>
          <h1>To be the best sports brand in the world</h1>
        </div>
      </div>

      {/* About Content */}
      <section className={styles.aboutContent}>
        <p>
          Athletes do not settle for average. And neither do we. We have a clear mission: To be the best sports brand in the world.
        </p>
        <p>
          Every day, we come to work to create and sell the best sports products in the world, and to offer the best service and consumer
          experience.
        </p>
        <p>
          We are guided by innovation, driven by sustainability, and inspired by the power of sport to change lives.
        </p>
      </section>

      {/* Info Cards */}
      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <h3>OUR PURPOSE</h3>
          <p>
            Through sport, we have the power to change lives. We create
            products, experiences and services that improve people's lives
            through innovation and performance.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>OUR INNOVATION</h3>
          <p>
            We continuously push boundaries to develop high-performance
            footwear, apparel and accessories that help athletes unlock
            their full potential.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>OUR SUSTAINABILITY</h3>
          <p>
            We are committed to reducing our environmental impact and creating
            a more sustainable future through responsible design, materials
            and manufacturing.
          </p>
        </div>

        <div className={styles.infoCard}>
          <h3>OUR PEOPLE</h3>
          <p>
            Our teams around the world are united by passion, diversity and the belief that through sport, anything is possible.
          </p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className={styles.bottomSection}>
        <div className={styles.left}>
          <h2>ROOTED IN SPORT. DRIVEN BY CULTURE.</h2>

          <p>
            From our humble beginnings in Germany to becoming one of the
            world's leading sports brands, sport has always been at the
            heart of everything we do.
          </p>

          <p>
            We collaborate with athletes, creators and communities across
            the globe to inspire confidence, creativity and performance in
            every generation.
          </p>

          <button>LEARN MORE ABOUT ADIDAS →</button>
        </div>

        <div className={styles.right}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPIxO3ShajH2flH183cCXVoGIYyDh638vyKCx0ulpFQ&s=10"
            alt="Adidas "
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;