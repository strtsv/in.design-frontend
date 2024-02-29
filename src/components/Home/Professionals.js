import React from "react";

import i1 from "../../assets/images/resources/team1.jpg";
import i2 from "../../assets/images/resources/team2.jpg";
import i3 from "../../assets/images/resources/team3.jpg";
import i4 from "../../assets/images/resources/team4.jpg";
import i5 from "../../assets/images/resources/team5.jpg";
import i6 from "../../assets/images/resources/team6.jpg";

class Professionals extends React.Component {
  render() {
    return (
      <section className="block pb-0">
        <div className="container">
          <h3 className="sub-title">A team United by shared values</h3>
          <div className="team-section">
            <div className="row">
              <div className="col-lg-5">
                <div className="team-head">
                  <h2>6 </h2>
                  <h3>Professional designers in our team</h3>
                </div>
                {}
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="team">
                      <img src={i1} alt />
                      <div className="figcaption">
                        <h3>Daniel Nikolson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="team">
                      <img src={i2} alt />
                      <div className="figcaption">
                        <h3>Daniel Nikolson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="team">
                      <img src={i3} alt />
                      <div className="figcaption">
                        <h3>Daniel Nikolson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="team">
                      <img src={i4} alt />
                      <div className="figcaption">
                        <h3>Daniel Nikolson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="team">
                      <img src={i5} alt />
                      <div className="figcaption">
                        <h3>Daniel Nikolson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                    {}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="team">
                      <img src={i6} alt />
                      <div className="figcaption">
                        <h3>Daniel Nikolson</h3>
                        <span>Designer</span>
                      </div>
                    </div>
                    {}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
        </div>
      </section>
    );
  }
}

export default Professionals;
