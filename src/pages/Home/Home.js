import React from 'react';
import OverLay from '../../component/OverLay';
import phone from '../../images/Home/Desktop/image-hero-phone.png';
import arrow from '../../images/Shared/icon-right-arrow.svg';
import passionate from '../../images/Home/Desktop/illustration-passionate.svg';
import resource from '../../images/Home/Desktop/illustration-resourceful.svg';
import friendly from '../../images/Home/Desktop/illustration-friendly.svg';
import dataDesign from '../../dataDesign';
import ScrollToTopDesign from '../../component/ScrollToTopDesign';
import { Link } from 'react-router-dom';

function Home() {
  const { graphicsDesign, appDesign, webDesign } = dataDesign;
  return (
    <>
      <ScrollToTopDesign />
      <section className="section">
        <article data-aos="fade-up" className="section-left">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services
          </p>
          <Link to="/about">
            <button className="learnmore">Learn more</button>
          </Link>
        </article>
        <article data-aos="fade-right" className="section-right">
          <div className="phone">
            <img src={phone} alt="Phone" />
          </div>
        </article>
      </section>
      {/* designs */}
      <section className="section-designs">
        <section className="section-container">
          <Link
            className="web-designs"
            to={{
              pathname: '/designs',
              state: webDesign,
            }}
          >
            <article data-aos="fade-right" className="col-left container  ">
              <div className="article-info">
                <h1>web design</h1>
                <div className="arrow">
                  <p>View Projects</p>
                  <img src={arrow} alt="Next" />
                </div>
              </div>
            </article>
          </Link>
          <article className="col-right">
            <Link
              data-aos="fade-left"
              className="app-designs container"
              to={{
                pathname: '/designs',
                state: appDesign,
              }}
            >
              <div className="article-info">
                <h1>App Design</h1>
                <div className="arrow">
                  <p>View Projects</p>
                  <img src={arrow} alt="Next" />
                </div>
              </div>
            </Link>
            <Link
              data-aos="fade-up"
              className="graphic-designs container"
              to={{
                pathname: '/designs',
                state: graphicsDesign,
              }}
            >
              <div className="article-info">
                <h1>graphics designs</h1>
                <div className="arrow">
                  <p>View Projects</p>
                  <img src={arrow} alt="Next" />
                </div>
              </div>
            </Link>
          </article>
        </section>
      </section>
      {/* Home about */}
      <section className="about">
        <article className="about-container">
          <aside data-aos="fade-right" className="aside-container">
            <div className="img-header">
              <img src={passionate} alt="passionate" />
            </div>
            <div className="aside-container-info">
              <h3>Passionate</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </aside>
          <aside data-aos="fade-up" className="aside-container">
            <div className="img-header">
              <img src={resource} alt="resourceful" />
            </div>
            <div className="aside-container-info">
              <h3>resourceful</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </aside>
          <aside data-aos="fade-left" className="aside-container">
            <div className="img-header">
              <img src={friendly} alt="friendly" />
            </div>
            <div className="aside-container-info">
              <h3>friendly</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}

export default Home;
