import React from "react";
import Location from "../../component/Location";

function About() {
  return (
    <main className="main-about">
      <section className="about-hero">
        <article className="about-hero-container">
          <aside className="about-info-container">
            <h1>About us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </aside>
          <aside className="about-img"></aside>
        </article>
      </section>

      <section className="talent">
        <article className="talent-container">
          <aside className="talent-img"></aside>
          <aside className="talent-info-container ">
            <h1>World-class talent</h1>
            <div>
              <p>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p>
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </div>
          </aside>
        </article>
      </section>

      <Location />

      <section className="talent1">
        <article className="talent-container1">
          <aside className="talent-info-container ">
            <h1>The real deal</h1>
            <div>
              <p>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </aside>
          <aside className="talent-img1"></aside>
        </article>
      </section>
    </main>
  );
}

export default About;
