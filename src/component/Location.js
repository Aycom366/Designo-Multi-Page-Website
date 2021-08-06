import React from 'react';
import canada from '../images/Shared/illustration-canada.svg';
import australia from '../images/Shared/illustration-australia.svg';
import unitedK from '../images/Shared/illustration-united-kingdom.svg';
import { Link } from 'react-router-dom';

function Location() {
  return (
    <section className="about-location">
      <article className="about-container">
        <aside data-aos="fade-left" className="aside-container-location">
          <div className="img-header media">
            <img src={canada} alt="canada" />
          </div>
          <div className="aside-container-location-info">
            <h3>Canada</h3>
            <Link className="btn-location" to="/location">
              see Location
            </Link>
          </div>
        </aside>

        <aside data-aos="fade-down" className="aside-container-location">
          <div className="img-header media">
            <img src={australia} alt="australia" />
          </div>
          <div className="aside-container-location-info">
            <h3>Australia</h3>
            <Link className="btn-location" to="/location">
              see Location
            </Link>
          </div>
        </aside>
        <aside data-aos="fade-left" className="aside-container-location">
          <div className="img-header media">
            <img src={unitedK} alt="United KingDom" />
          </div>
          <div className="aside-container-location-info">
            <h3>United Kingdom</h3>
            <Link className="btn-location" to="/location">
              see Location
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Location;
