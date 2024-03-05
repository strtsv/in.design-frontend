import React from "react";
import $ from "jquery";
import "../../assets/js/plugin/slick.js";

import i1 from "../../assets/images/resources/testi1.jpg";
import i2 from "../../assets/images/resources/testi2.jpg";
import i3 from "../../assets/images/resources/testi3.jpg";
import i4 from "../../assets/images/resources/testi4.jpg";
import i5 from "../../assets/images/resources/testi5.jpg";

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

class Testi extends React.Component {
  componentDidMount() {
    initSlider(".testi-carousel", {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
  render() {
    return (
      <section className="block testi-section">
        <div className="container">
          <div className="section-title">
            <h3 className="sub-title">Thanks for your sweet words to us</h3>
          </div>
          {}
          <div className="testimonial-section">
            <div className="row testi-carousel">
              <div className="col-lg-4">
                <div className="testi-slide">
                  <div className="testi-head">
                    <img src={i1} alt />
                    <div className="user-info">
                      <h3>Alana Francheska</h3>
                      <span>Lorem company</span>
                    </div>
                  </div>
                  <p>
                    Integer vehicula, est vel posuere gravida, eros tellus
                    fermentum magna, sit amet mattis mauris quam a nisl. Mauris
                    vitae commodo elit. In hac habitasse platea.
                  </p>
                  <ul className="rating">
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                  </ul>
                </div>
                {}
              </div>
              <div className="col-lg-4">
                <div className="testi-slide">
                  <div className="testi-head">
                    <img src={i2} alt />
                    <div className="user-info">
                      <h3>Donald Pakura</h3>
                      <span>Lorem company</span>
                    </div>
                  </div>
                  <p>
                    Integer vehicula, est vel posuere gravida, eros tellus
                    fermentum magna, sit amet mattis mauris quam a nisl. Mauris
                    vitae commodo elit. In hac habitasse platea.
                  </p>
                  <ul className="rating">
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                  </ul>
                </div>
                {}
              </div>
              <div className="col-lg-4">
                <div className="testi-slide">
                  <div className="testi-head">
                    <img src={i3} alt />
                    <div className="user-info">
                      <h3>Sara Kristian</h3>
                      <span>Lorem company</span>
                    </div>
                  </div>
                  <p>
                    Integer vehicula, est vel posuere gravida, eros tellus
                    fermentum magna, sit amet mattis mauris quam a nisl. Mauris
                    vitae commodo elit. In hac habitasse platea.
                  </p>
                  <ul className="rating">
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                  </ul>
                </div>
                {}
              </div>
              <div className="col-lg-4">
                <div className="testi-slide">
                  <div className="testi-head">
                    <img src={i4} alt />
                    <div className="user-info">
                      <h3>Alana Francheska</h3>
                      <span>Lorem company</span>
                    </div>
                  </div>
                  <p>
                    Integer vehicula, est vel posuere gravida, eros tellus
                    fermentum magna, sit amet mattis mauris quam a nisl. Mauris
                    vitae commodo elit. In hac habitasse platea.
                  </p>
                  <ul className="rating">
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                  </ul>
                </div>
                {}
              </div>
              <div className="col-lg-4">
                <div className="testi-slide">
                  <div className="testi-head">
                    <img src={i5} alt />
                    <div className="user-info">
                      <h3>Alana Francheska</h3>
                      <span>Lorem company</span>
                    </div>
                  </div>
                  <p>
                    Integer vehicula, est vel posuere gravida, eros tellus
                    fermentum magna, sit amet mattis mauris quam a nisl. Mauris
                    vitae commodo elit. In hac habitasse platea.
                  </p>
                  <ul className="rating">
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                    <li>
                      <i className="la la-star" />
                    </li>
                  </ul>
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

export default Testi;
