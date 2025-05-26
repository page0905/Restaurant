import React, { useState } from 'react';
import styles from './Booking.module.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation has been successfully booked!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      message: ''
    });
  };

  return (
    <section id="book-a-table" className={styles.Booking}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h3>Reservation</h3>
          <p>Book a Table</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.bookingForm}>
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${styles.formControl}`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${styles.formControl}`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="phone"
                  className={`form-control ${styles.formControl}`}
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <div className={styles.inputGroup}>
                <input
                  type="date"
                  name="date"
                  className={`form-control ${styles.formControl}`}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <div className={styles.inputGroup}>
                <input
                  type="time"
                  name="time"
                  className={`form-control ${styles.formControl}`}
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <small className={styles.formText}>Please enter the time of your visit.</small>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  name="people"
                  className={`form-control ${styles.formControl}`}
                  placeholder="Number of people"
                  value={formData.people}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className={`form-control ${styles.formControl}`}
              name="message"
              rows="5"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.textCenter}>
            <button type="submit" className={styles.submitButton}>
              Book a Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;