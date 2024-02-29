import React from "react";
import $ from "jquery";
import { WOW } from "../../assets/js/wow.js";

import i1 from "../../assets/images/logo.png";
import i2 from "../../assets/images/icon3.png";
import i3 from "../../assets/images/icon4.png";
import i4 from "../../assets/images/icon5.png";

class Header extends React.Component {
  componentDidMount() {
    $(window).on("load", function() {
      $(".menu-btn").on("click", function() {
        $(this).toggleClass("active");
        $(".responsive-mobile-menu").toggleClass("active");
      });
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 1) {
        $("header").addClass("sticky animated slideInDown");
      } else {
        $("header").removeClass("sticky animated slideInDown");
      }
    });
    $(window).on("load", function() {
      "use strict";
      new WOW().init();
    });
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="index.html" title>
                <img src={i1} alt />
              </a>
            </div>
            {}
            <nav>
              <ul>
                <li>
                  <a className="active" href="index.html" title>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html" title>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="services.html" title>
                    Services
                  </a>
                </li>
                <li>
                  <a href="portfolio.html" title>
                    Portfolio
                  </a>
                  <ul>
                    <li>
                      <a href="index.html#" title>
                        Portfolio Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="catalog.html" title>
                    Shop
                  </a>
                  <ul>
                    <li>
                      <a href="catalog-product.html" title>
                        Shop Details
                      </a>
                    </li>
                    <li>
                      <a href="shop.html" title>
                        Shop 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html" title>
                    Blog
                  </a>
                  <ul>
                    <li>
                      <a href="blog-single.html" title>
                        Blog Single
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html" title>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            {}
            <ul className="mint-funcz">
              <li>
                <a href="index.html#" title className="search-btn">
                  <img src={i2} alt />
                </a>
              </li>
              <li>
                <a href="index.html#" title>
                  <img src={i3} alt />
                </a>
              </li>
              <li>
                <a href="index.html#" title>
                  <img src={i4} alt />
                  <span className="cart-number">3</span>
                </a>
              </li>
            </ul>
            {}
            <div className="contact-head-info">
              <h4>+44 20 7722 0088</h4>
              <a href="index.html#" title>
                Order a call
              </a>
            </div>
            {}
            <div className="menu-btnn">
              <div className="menu-btn">
                <span className="bar1" />
                <span className="bar2" />
                <span className="bar3" />
              </div>
              {}
            </div>
          </div>
          {}
        </div>
      </header>
    );
  }
}

export default Header;
