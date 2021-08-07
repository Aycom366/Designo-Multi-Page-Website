import React, { useState } from 'react';
import LocationMap from '../../component/LocationMap';

function Location() {
  const [canadaCoordinates, setcanadaCoordinates] = useState({
    lat: '43.6532',
    long: '-79.3832',
  });

  const [australiaCoordiantes, setaustraliaCoordiantes] = useState({
    lat: '-38.733826 ',
    long: '143.6872713',
  });

  const [UkCoordiantes, setUkCoordiantes] = useState({
    lat: '39.113014',
    long: '-105.358887',
  });

  return (
    <main className="main-location">
      <section className="country-container">
        <article
          data-aos="fade-right"
          className="canada-container-info general"
        >
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
        <article data-aos="fade-left" className="location-img canada">
          <LocationMap cordinate={canadaCoordinates} />
        </article>
      </section>

      <section className="country-container1 ">
        <article data-aos="fade-right" className="location-img australia">
          <LocationMap cordinate={australiaCoordiantes} />
        </article>
        <article
          data-aos="fade-left"
          className="australia-container-info general"
        >
          <h1>Australia</h1>
          <div className="country-info-container">
            <div className="country-info">
              <h3>Designo AU office</h3>
              <p>
                19 Ballone Street
                <br />
                New South Wales 2443
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
        <article data-aos="fade-right" className="UK-container-info general">
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
        <article data-aos="fade-left" className="location-img UK">
          <LocationMap cordinate={UkCoordiantes} />
        </article>
      </section>
    </main>
  );
}

export default Location;
