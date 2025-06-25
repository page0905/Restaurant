import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/image/About/look.jpg";
import historyImg from "../../assets/image/About/look1.jpg";
import specificImg from "../../assets/image/About/look2.jpg";
import delicaciesImg from "../../assets/image/About/look3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const About = () => {
  const sections = [
    {
      title: "About Restaurant",
      img: aboutImg,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis assumenda placeat, hic maxime exercitationem ratione soluta doloremque odit possimus eum...",
    },
    {
      title: "Our History",
      img: historyImg,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab tenetur nesciunt quibusdam placeat id harum voluptate veritatis sed minus...",
    },
    {
      title: "Specific",
      img: specificImg,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos enim, ullam inventore nobis aliquam sed ipsam cupiditate...",
    },
    {
      title: "Delicacies",
      img: delicaciesImg,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab delectus dolor obcaecati corrupti inventore ipsum perferendis...",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h3>About</h3>
          <p>About Us</p>
        </div>

        {/* Desktop Layout */}
        <div className="d-none d-lg-block">
          {/* Section 1 */}
          <div className="row gy-4">
            <div
              className={`col-lg-7 position-relative ${styles.aboutImg}`}
              style={{ backgroundImage: `url(${sections[0].img})` }}
            >
              <div className={styles.callUs}>
                <h2>{sections[0].title}</h2>
              </div>
            </div>
            <div
              className={`col-lg-5 d-flex align-items-end ${styles.contentBlock}`}
            >
              <div className={`content ps-0 ps-lg-5 ${styles.contentText}`}>
                <p>{sections[0].content}</p>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Section 2 */}
          <div className="row gy-4">
            <div
              className={`col-lg-5 d-flex align-items-end ${styles.contentBlock}`}
            >
              <div className={`content ps-0 ps-lg-5 ${styles.contentText}`}>
                <p>{sections[1].content}</p>
              </div>
            </div>
            <div
              className={`col-lg-7 position-relative ${styles.aboutImg}`}
              style={{ backgroundImage: `url(${sections[1].img})` }}
            >
              <div className={styles.callUs}>
                <h2>{sections[1].title}</h2>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />
          {/* Section 3, 4 */}
          <div className="row gy-4">
            <div
              className={`col-lg-4 position-relative ${styles.aboutImg}`}
              style={{ backgroundImage: `url(${specificImg})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className={styles.callUs}>
                <h2>Specific</h2>
              </div>
            </div>

            <div
              className={`col-lg-4 d-flex align-items-end ${styles.contentBlock}`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={`content ps-0 ps-lg-5 ${styles.contentText}`}>
                <p>{sections[2].content}</p>
              </div>
            </div>

            <div
              className={`col-lg-4 position-relative ${styles.aboutImg}`}
              style={{ backgroundImage: `url(${delicaciesImg})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className={styles.callUs}>
                <h2>Delicacies</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="d-block d-lg-none mt-4">
          <Swiper spaceBetween={30}>
            {sections.map((sec, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`${styles.aboutImg}`}
                  style={{ backgroundImage: `url(${sec.img})`, minHeight: 250 }}
                >
                  <div className={styles.callUs}>
                    <h2>{sec.title}</h2>
                  </div>
                </div>
                <div className={`${styles.contentBlock} mt-3`}>
                  <div className={styles.contentText}>
                    <p>{sec.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
