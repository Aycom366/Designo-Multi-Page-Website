import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrow from "../../images/Shared/icon-right-arrow.svg";
import { Link } from "react-router-dom";
import dataDesign from "../../dataDesign";
import ScrollToTopDesign from "../../component/ScrollToTopDesign";
import { useGlobalContext } from "../../context";

const { graphicsDesign, appDesign, webDesign } = dataDesign;

function Designs() {
  let location = useLocation();

  const { setLocate } = useGlobalContext();

  useEffect(() => {
    setLocate(location);
  }, [location]);

  //to use for page navigation
  const newTitle = location.state.title;
  return (
    <>
      <ScrollToTopDesign location={location} />

      <main class="design-main">
        <section className="section-design">
          <article data-aos="zoom-in" className="section-design-container">
            <h1>{location.state.title}</h1>
            <p>{location.state.subTitle}</p>
          </article>
        </section>
        <section className="section-images">
          <div className="section-image-container">
            {location.state.infoArray.map((item, index) => {
              return (
                <article
                  key={index}
                  data-aos={`${index % 2 === 1 ? "fade-right" : "flip-up"}`}
                  className="details-container"
                >
                  <div className={` ${item.name} details `}></div>
                  <div className="details-info">
                    <h3>{item.name}</h3>
                    <p>{item.info}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <div style={{ overflow: "hidden" }} className="section-link-designs">
          <div className="section-link-container">
            {newTitle !== "Web Design" && (
              <Link
                style={{ overflow: "hidden" }}
                data-aos="fade-left"
                className="web-designers link-container"
                to={{
                  pathname: "/designs",
                  state: webDesign,
                }}
              >
                <div className="article-info">
                  <h1>web design</h1>
                  <div className="arrow">
                    <p>View Projects</p>
                    <img src={arrow} alt="Next" />
                  </div>
                </div>
              </Link>
            )}
            {newTitle !== "App Design" && (
              <Link
                data-aos="zoom-in"
                className="app-designers link-container"
                to={{
                  pathname: "/designs",
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
            )}
            {newTitle !== "Graphic Design" && (
              <Link
                data-aos="fade-left"
                className="graphic-designers link-container"
                to={{
                  pathname: "/designs",
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
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Designs;
