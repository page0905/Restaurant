import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.classList.add(styles.visible);
    }
  }, []);

  return (
    <section
      id="hero"
      className={`${styles.hero} ${styles.visible} d-flex align-items-center`}
    >
      <div className={`container position-relative ${styles.heroContainer}`}>
        <div className="row justify-content-end">
          <div className={`col-lg-8 ${styles.heroContent}`}>
            <h1>
              Welcome to <span>MSC Restaurant</span>
            </h1>
            <h2 className={styles.subtitle}>
              "Where culinary excellence meets modern elegance, delivering a
              refined and upscale dining experience."
            </h2>
            <div className={styles.btns}>
              <Link to="/menu" className={`${styles.btnMenu} scrollto`}>
                Our Menu
              </Link>
              <Link to="/booking" className={`${styles.btnBook} scrollto`}>
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
