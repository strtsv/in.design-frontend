import React from "react";
import $ from "jquery";
import "../../assets/js/plugin/slick.js";

import i1 from "../../assets/images/resources/project1.jpg";
import i2 from "../../assets/images/resources/project2.jpg";
import i3 from "../../assets/images/resources/project3.jpg";
import i4 from "../../assets/images/resources/project1.jpg";

function initSlider(selector, options) {
  if ($.fn.slick) {
    $(selector).slick(options);
    console.log("catched");
  } else {
    setTimeout(function() {
      initSlider(selector, options);
    }, 500);
  }
}

class Projects extends React.Component {
  componentDidMount() {
    initSlider(".project-carousel", {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  render() {
    return (
      <section className="block2">
        <div className="fixed-bg bg1" />
        <div className="container">
          <div className="latest-projects-section">
            <div className="row">
              <div className="col-lg-5">
                <div className="project-text">
                  <h3 className="sub-title">Our latest projects</h3>
                  <p>
                    This is why we are proud to offer a wide selection of our
                    designer ceiling, wall, floor and table lamps. You will also
                    find products ranging from modern styles, modern
                    interpretations of classic design. Our collection is updated
                    every day with beautiful solutions and we are glad that you,
                    our customers{" "}
                  </p>
                  <a href="portfolio.html" title className="lnk-default2">
                    View more <i className="la la-arrow-right" />
                  </a>
                </div>
                {}
              </div>
              <div className="col-lg-7">
                <div className="project-carousel">
                  <div className="project-item">
                    <img src={i1} alt />
                    <div className="project-info">
                      <h3>
                        <a href="portfolio-details.html" title>
                          Living room
                        </a>
                      </h3>
                      <span>59 projects</span>
                    </div>
                    {}
                  </div>
                  {}
                  <div className="project-item">
                    <img src={i2} alt />
                    <div className="project-info">
                      <h3>
                        <a href="portfolio-details.html" title>
                          Kitchen
                        </a>
                      </h3>
                      <span>75 projects</span>
                    </div>
                    {}
                  </div>
                  {}
                  <div className="project-item">
                    <img src={i3} alt />
                    <div className="project-info">
                      <h3>
                        <a href="portfolio-details.html" title>
                          Commercial
                        </a>
                      </h3>
                      <span>49 projects</span>
                    </div>
                    {}
                  </div>
                  {}
                  <div className="project-item">
                    <img src={i4} alt />
                    <div className="project-info">
                      <h3>
                        <a href="portfolio-details.html" title>
                          Living room
                        </a>
                      </h3>
                      <span>59 projects</span>
                    </div>
                    {}
                  </div>
                  {}
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

export default Projects;
