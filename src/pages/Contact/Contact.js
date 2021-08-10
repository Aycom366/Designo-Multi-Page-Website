import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorIcon from "../../images/contact/desktop/icon-error.svg";
import { useGlobalContext } from "../../context.js";
import Location from "../../component/Location";
import { useForm } from "react-hook-form";

function Contact() {
  let currrentLocation = useLocation();
  const { setLocate } = useGlobalContext();
  useEffect(() => {
    setLocate(currrentLocation);
  }, [currrentLocation]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  //getting the data objects when the button is clicked
  const onSubmit = (e) => {
    console.log(e);
    reset();
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
            <form className="forminformation" onSubmit={handleSubmit(onSubmit)}>
              <aside
                data-aos="fade-left"
                data-aos-delay="500"
                className="form-inputs"
              >
                <input
                  placeholder="Full Name"
                  type="text"
                  autoComplete="new-name"
                  {...register("name", { required: "can't be empty" })}
                  onKeyUp={() => trigger("name")}
                />
                {errors.name && (
                  <p className="error-Info ">
                    <em>{errors.name.message}</em>
                    <img src={ErrorIcon} alt="ErrorIcon" />
                  </p>
                )}
              </aside>
              <aside
                data-aos="fade-left"
                data-aos-delay="750"
                className="form-inputs"
              >
                <input
                  placeholder="Email"
                  type="email"
                  autoComplete="tuber"
                  {...register("email", {
                    required: "can't be empty",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "email not valid!",
                    },
                  })}
                  onKeyUp={() => trigger("email")}
                />
                {errors.email && (
                  <p className="error-Info">
                    <em>{errors.email.message}</em>
                    <img src={ErrorIcon} alt="ErrorIcon" />
                  </p>
                )}
              </aside>
              <aside
                data-aos="fade-left"
                data-aos-delay="1000"
                className="form-inputs"
              >
                <input
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  autoComplete=""
                  {...register("phone", { required: "can't be empty" })}
                  onKeyUp={() => trigger("phone")}
                />
                {errors.phone && (
                  <p className="error-Info">
                    <em>{errors.phone.message}</em>
                    <img src={ErrorIcon} alt="ErrorIcon" />
                  </p>
                )}
              </aside>
              <aside
                data-aos="fade-left"
                data-aos-delay="1250"
                className="form-input "
              >
                <textarea
                  placeholder="Your Message"
                  type="text"
                  name="message"
                  autoComplete="off"
                  {...register("message", { required: "can't be empty" })}
                  onKeyUp={() => trigger("message")}
                />
                {errors.message && (
                  <p className="error-Info">
                    <em>{errors.message.message}</em>
                    <img src={ErrorIcon} alt="ErrorIcon" />
                  </p>
                )}
              </aside>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </article>
        </section>
      </section>
      <Location />
    </main>
  );
}

export default Contact;
