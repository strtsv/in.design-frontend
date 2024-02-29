import React from "react";
import $ from "jquery";

import i from "../../assets/images/resources/img5.jpg";

class Consultation extends React.Component {
  render() {
    return (
      <section className="consultation-sec">
        <div className="container">
          <div className="consultation-section">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="consult-text">
                  <h3 className="sub-title">
                    Get a free consultation. Just leave a request below
                  </h3>
                  <form className="subsc-form">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your phone number"
                    />
                    <button type="submit" className="lnk-default">
                      Сallback <i className="la la-arrow-right" /> <span />
                    </button>
                  </form>
                </div>
                {}
              </div>
              <div className="col-lg-5">
                <div
                  className="consult-img wow slideInUp"
                  data-wow-duration="1000ms"
                >
                  <img src={i} alt />
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

export default Consultation;
