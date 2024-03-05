import React from "react";
import $ from "jquery";

class Portfolio extends React.Component {
  componentDidMount() {
    $(window).on("load", function() {
      $(".responsive-mobile-menu ul ul")
        .parent()
        .addClass("menu-item-has-children");
      $(".responsive-mobile-menu ul li.menu-item-has-children > a").on(
        "click",
        function() {
          $(this)
            .parent()
            .toggleClass("active")
            .siblings()
            .removeClass("active");
          $(this)
            .next("ul")
            .slideToggle();
          $(this)
            .parent()
            .siblings()
            .find("ul")
            .slideUp();
          return false;
        }
      );
    });
  }
  render() {
    return (
      <div className="responsive-mobile-menu">
        <ul>
          <li>
            <a href="index.html" title>
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
      </div>
    );
  }
}

export default Portfolio;
