import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">          
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Book Bar</h2>
            <p className="fs-17">
              Discover the literary universe with Book Bar, your personalized
              gateway to a world of endless stories and profound journeys. At
              Book Bar, we believe in the transformative power of literature and
              the magic of storytelling. Our app is more than just a search
              engine; it's a sanctuary for bibliophiles, a haven where book
              lovers can delve into the vast expanse of human imagination. With
              a seamless interface and a curated collection spanning genres,
              cultures, and eras, Book Bar is your trusted companion in the
              quest for the perfect read. Whether you're seeking the allure of
              classic literature or the excitement of contemporary bestsellers,
              embark on your literary odyssey with Book Bar and let the pages of
              countless tales unfold before you..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
