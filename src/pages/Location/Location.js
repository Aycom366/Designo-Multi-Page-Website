import React from "react";

function Location() {
  return (
    <main className="main-location">
      <section className="country-container">
        <article className="canada-container-info general">
          <h1>Canada</h1>
          <div className="country-info-container">
            <div className="country-info">
              <h3>Designo central office</h3>
              <p>
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="country-info">
              <h3>Contact</h3>
              <p>P : +253-863-8967 </p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </article>
        <article className="location-img canada"></article>
      </section>

      <section className="country-container1 ">
        <article className="location-img australia"></article>
        <article className="australia-container-info general">
          <h1>Australia</h1>
          <div className="country-info-container">
            <div className="country-info">
              <h3>Designo AU office</h3>
              <p>
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="country-info">
              <h3>Contact</h3>
              <p>P : (02) 6720 9092 </p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </article>
      </section>

      <section className="country-container">
        <article className="UK-container-info general">
          <h1>United Kingdom</h1>
          <div className="country-info-container">
            <div className="country-info">
              <h3>Designo UK office</h3>
              <p>
                13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </p>
            </div>
            <div className="country-info">
              <h3>Contact</h3>
              <p>P : 078 3115 1400 </p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </article>
        <article className="location-img UK"></article>
      </section>
    </main>
  );
}

export default Location;
