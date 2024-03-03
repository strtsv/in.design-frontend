import React from "react";
import $ from "jquery";
import "../../assets/js/plugin/slick.js";

import i1 from "../../assets/images/icon1.png";
import i2 from "../../assets/images/icon2.png";
import i3 from "../../assets/images/resources/banner1.jpg";
import i4 from "../../assets/images/resources/banner2.jpg";
import i5 from "../../assets/images/resources/banner3.jpg";

class MakeBetter extends React.Component {
  componentDidMount() {
    $(".lnk-default")
      .on("mouseenter", function(e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this)
          .find("span")
          .css({ top: relY, left: relX });
      })
      .on("mouseout", function(e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this)
          .find("span")
          .css({ top: relY, left: relX });
      });
  }
  render() {
    return (
      <section className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h2 className="wow fadeInUp" data-wow-duration="1000ms">
                  We Make Your H<span>o</span>me Better
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  We are tending to the thousands of details it takes to create
                  a custom home tailored to your lifestyle
                </p>
                <a
                  href="contact.html"
                  title
                  className="lnk-default wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="500ms"
                >
                  to order <i className="la la-arrow-right" /> <span />
                </a>
                <ul
                  className="banz-list wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="700ms"
                >
                  <li>
                    <div className="mint-fzt">
                      <img src={i1} alt />
                      <div className="bzn-csd">
                        <h5>Durability</h5>
                        <span>Exclusive 10 year warrantly</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint-fzt">
                      <img src={i2} alt />
                      <div className="bzn-csd">
                        <h5>Modern interior</h5>
                        <span>Exclusive 10 year warrantly</span>
                      </div>
                    </div>
                  </li>
                </ul>
                {}
                <div className="clearfix" />
              </div>
              {}
            </div>
            <div className="col-lg-6">
              <div className="banner-slider">
                <div className="banner-slide">
                  <img src={i3} alt />
                </div>
                {}
                <div className="banner-slide">
                  <img src={i4} alt />
                </div>
                {}
                <div className="banner-slide">
                  <img src={i5} alt />
                </div>
                {}
              </div>
              {}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MakeBetter;
