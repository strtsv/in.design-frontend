import React from "react";

import i1 from "../../assets/images/resources/blog1.jpg";
import i2 from "../../assets/images/resources/blog2.jpg";
import i3 from "../../assets/images/resources/blog3.jpg";

class BlogNews extends React.Component {
  render() {
    return (
      <section className="block">
        <div className="container">
          <h3 className="sub-title">Our Blog and News</h3>
          <div className="blog-posts">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="blog-post">
                  <div className="blog-thumbnail">
                    <img src={i1} alt />
                    <span className="category">Interior design</span>
                  </div>
                  <div className="blog-info">
                    <span>Jul 21, 2020</span>
                    <h2 className="blog-title">
                      <a href="blog-single.html" title>
                        Types of home
                      </a>
                    </h2>
                    <p>
                      Sed pellentesque velit a elit mattis, a volutpat neque
                      feugiat
                    </p>
                    <a href="blog-single.html" title className="lnk-default2">
                      View more <i className="la la-arrow-right" />
                    </a>
                  </div>
                </div>
                {}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="blog-post">
                  <div className="blog-thumbnail">
                    <img src={i2} alt />
                    <span className="category">Interior design</span>
                  </div>
                  <div className="blog-info">
                    <span>Jul 21, 2020</span>
                    <h2 className="blog-title">
                      <a href="blog-single.html" title>
                        Purchase of furniture
                      </a>
                    </h2>
                    <p>
                      Sed pellentesque velit a elit mattis, a volutpat neque
                      feugiat
                    </p>
                    <a href="blog-single.html" title className="lnk-default2">
                      View more <i className="la la-arrow-right" />
                    </a>
                  </div>
                </div>
                {}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="blog-post">
                  <div className="blog-thumbnail">
                    <img src={i3} alt />
                    <span className="category">Interior design</span>
                  </div>
                  <div className="blog-info">
                    <span>Jul 21, 2020</span>
                    <h2 className="blog-title">
                      <a href="blog-single.html" title>
                        Kitchen design ideas
                      </a>
                    </h2>
                    <p>
                      Sed pellentesque velit a elit mattis, a volutpat neque
                      feugiat
                    </p>
                    <a href="blog-single.html" title className="lnk-default2">
                      View more <i className="la la-arrow-right" />
                    </a>
                  </div>
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

export default BlogNews;
