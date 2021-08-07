import React from 'react';

function Contact() {
  return (
    <main className="main-contact">
      <section className="contact">
        <section className="contact-container">
          <article className="contact-details">
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </article>
          <article className="contact-information">
            <form action="" className="forminformation">
              <aside className="form-inputs">
                <input type="text" name="FullName" />
              </aside>
            </form>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Contact;
