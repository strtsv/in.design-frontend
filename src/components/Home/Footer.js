import React from "react";

import i from "../../assets/images/ft-logo.png";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="top-footer">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="widget widget-info">
                  <h3 className="widget-title">NEWSLETTER</h3>
                  <form className="widget-form">
                    <input type="text" name="email" placeholder="Your e-mail" />
                    <button type="submit">
                      <i className="la la-arrow-right" />
                    </button>
                  </form>
                  <span>Sign up to receive sprecial offers!</span>
                  <ul className="social-links">
                    <li>
                      <a href="index.html#" title>
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#" title>
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#" title>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                  {}
                </div>
                {}
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="widget widget-contact text-right">
                      <h3 className="widget-title">Contact Us</h3>
                      <ul className="ft-links">
                        <li>1556 Broadway, suite 416 New York, NY 10120 USA</li>
                        <li>+44 20 7722 0088</li>
                        <li>
                          <a href="index.html#" title>
                            in.design@gmail.com
                          </a>
                        </li>
                      </ul>
                      {}
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="widget widget-category text-right">
                      <h3 className="widget-title">Contact Us</h3>
                      <ul className="ft-links">
                        <li>
                          <a href="index.html#" title>
                            Decor
                          </a>
                        </li>
                        <li>
                          <a href="index.html#" title>
                            Furniture
                          </a>
                        </li>
                        <li>
                          <a href="index.html#" title>
                            Lighting
                          </a>
                        </li>
                        <li>
                          <a href="index.html#" title>
                            Interior design
                          </a>
                        </li>
                        <li>
                          <a href="index.html#" title>
                            Architecture design
                          </a>
                        </li>
                        <li>
                          <a href="index.html#" title>
                            Commercial design
                          </a>
                        </li>
                      </ul>
                      {}
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="widget widget-company text-right">
                      <h3 className="widget-title">Contact Us</h3>
                      <ul className="ft-links">
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
                        </li>
                        <li>
                          <a href="index.html#" title>
                            Delivery
                          </a>
                        </li>
                        <li>
                          <a href="contact.html" title>
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="blog.html" title>
                            Blog
                          </a>
                        </li>
                      </ul>
                      {}
                    </div>
                    {}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="bottom-footer">
            <div className="ft-logo">
              <img src={i} alt />
            </div>
            {}
            <ul className="btm-links">
              <li>
                <a href="index.html#" title>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="index.html#" title>
                  Terms and Conditions
                </a>
              </li>
            </ul>
            {}
            <div className="clearfix" />
          </div>
          {}
        </div>
      </footer>
    );
  }
}

export default Footer;
