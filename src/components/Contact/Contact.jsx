import React, { useState } from "react";
import styles from "./Contact.module.css";
import { BiMap, BiTime, BiEnvelope, BiPhone } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionTitle}>
        <h3>Contact</h3>
        <p>Contact Us</p>
      </div>

      <div className={styles.mapWrapper}>
        <iframe
          title="Restaurant Location"
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13179.316737770041!2d106.63864290331348!3d10.869775224642728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ebd02c3a8f%3A0xba0c2d6cca8b0bc!2sMM%20Mega%20Market!5e0!3m2!1sen!2s!4v1748271741479!5m2!1sen!2s"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.contactWrapper}>
        <div className={styles.infoColumn}>
          <div className={styles.infoItem}>
            <BiMap className={styles.infoIcon} />
            <div className={styles.infoItemContent}>
              <h4>Location:</h4>
              <p>123 ABC.</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <BiTime className={styles.infoIcon} />
            <div>
              <h4>Open Hours:</h4>
              <p>
                Monday - Sunday:
                <br />
                9:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <BiEnvelope className={styles.infoIcon} />
            <div>
              <h4>Email:</h4>
              <p>info@mscrestaurant.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <BiPhone className={styles.infoIcon} />
            <div>
              <h4>Phone:</h4>
              <p>+1 234 567 890</p>
            </div>
          </div>
        </div>

        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                className={styles.formControl}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className={styles.formControl}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              className={styles.formControl}
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="8"
              className={styles.formControl}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className={styles.submitWrapper}>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
