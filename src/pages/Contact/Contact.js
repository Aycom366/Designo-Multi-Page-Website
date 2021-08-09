import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorIcon from '../../images/contact/desktop/icon-error.svg';
import { useGlobalContext } from '../../context.js';
import Location from '../../component/Location';

function Contact() {
  let currrentLocation = useLocation();
  const { setLocate } = useGlobalContext();

  useEffect(() => {
    setLocate(currrentLocation);
  }, [currrentLocation]);

  //creating an object for the contactInfo;
  const [contactInfo, setcontactInfo] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcontactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="main-contact">
      <section className="contact">
        <section className="contact-container">
          <article data-aos="fade-right" className="contact-details">
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </article>
          <article
            data-aos="fade-left"
            data-aos-delay="250"
            className="contact-information"
          >
            <section className="forminformation">
              <form
                onSubmit={handleSubmit}
                data-aos="fade-left"
                data-aos-delay="500"
                className="form-inputs"
              >
                <input
                  value={contactInfo.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  type="text"
                  name="fullname"
                  autoComplete="off"
                />
                <p className="error-Info">
                  <em>can't be empty</em>
                  <img src={ErrorIcon} alt="ErrorIcon" />
                </p>
              </form>
              <form
                onSubmit={handleSubmit}
                data-aos="fade-left"
                data-aos-delay="750"
                className="form-inputs"
              >
                <input
                  value={contactInfo.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  name="email"
                  autoComplete="off"
                />
                <p className="error-Info">
                  <em>can't be empty</em>
                  <img src={ErrorIcon} alt="ErrorIcon" />
                </p>
              </form>
              <form
                onSubmit={handleSubmit}
                data-aos="fade-left"
                data-aos-delay="1000"
                className="form-inputs"
              >
                <input
                  value={contactInfo.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  autoComplete="off"
                />
                <p className="error-Info">
                  <em>can't be empty</em>
                  <img src={ErrorIcon} alt="ErrorIcon" />
                </p>
              </form>
              <form
                onSubmit={handleSubmit}
                data-aos="fade-left"
                data-aos-delay="1250"
                className="form-input "
              >
                <textarea
                  value={contactInfo.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  type="text"
                  name="message"
                  autoComplete="off"
                />
                <p className="error-Info">
                  <em>can't be empty</em>
                  <img src={ErrorIcon} alt="ErrorIcon" />
                </p>
              </form>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </section>
          </article>
        </section>
      </section>
      <Location />
    </main>
  );
}

export default Contact;
