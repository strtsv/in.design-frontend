import React from "react";

import i1 from "../../assets/images/resources/abt1.jpg";
import i2 from "../../assets/images/resources/abt2.jpg";

class WatchPlay extends React.Component {
  render() {
    return (
      <section className="block pb-0">
        <div className="container">
          <div className="about-us-section">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="abt-imgz">
                  <img
                    className="wow fadeInUp"
                    data-wow-duration="1000ms"
                    src={i1}
                    alt
                  />
                  <img
                    className="wow fadeInRight"
                    data-wow-duration="1000ms"
                    data-wow-delay="400ms"
                    src={i2}
                    alt
                  />
                </div>
                {}
                <div className="abt-txt">
                  <h4>
                    Watch a video about how we work and try for our customers
                  </h4>
                  <span>Play video</span>
                  <a
                    href="https://www.youtube.com/watch?v=pNxqh-JCMpw"
                    title
                    className="play-btn html5lightbox"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text">
                  <h2 className="sub-title">History of our creation</h2>
                  <p>
                    Since our humble beginnings in 2006, We has significantly
                    expanded its collection of exclusive lamps. Today we are
                    proud to present you our best lighting design solutions. Our
                    collection is updated every day with beautiful solutions and
                    we are glad that you, our customers, support us on way! Our
                    collection is updated every day with beautiful solutions
                  </p>
                  <a href="about.html" title className="lnk-default2">
                    Read more <i className="la la-arrow-right" />
                  </a>
                </div>
                {}
              </div>
            </div>
          </div>
          {}
        </div>
      </section>
    );
  }
}

export default WatchPlay;
