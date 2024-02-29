import React from "react";

class Works extends React.Component {
  render() {
    return (
      <section className="block">
        <div className="container">
          <div className="section-title align-items-center">
            <h3 className="sub-title">Our work process make your dream true</h3>
            <a href="index.html#" title className="lnk-default2">
              More detailed <i className="la la-arrow-right" />
            </a>
          </div>
          {}
          <div className="process-section">
            <ul>
              <li>
                <div className="proz-mint">
                  <h3>Concept</h3>
                  <p>Donec vitae semper, quis finibus mauris. Morbi tortor</p>
                  <h2 className="p-num">01.</h2>
                </div>
                {}
              </li>
              <li>
                <div className="proz-mint">
                  <h3>Design</h3>
                  <p>Donec vitae semper, quis finibus mauris. Morbi tortor</p>
                  <h2 className="p-num">03.</h2>
                </div>
                {}
              </li>
              <li>
                <div className="proz-mint">
                  <h3>Launch</h3>
                  <p>Donec vitae semper, quis finibus mauris. Morbi tortor</p>
                  <h2 className="p-num">05.</h2>
                </div>
                {}
              </li>
              <li>
                <div className="proz-mint">
                  <h3>Plan</h3>
                  <p>Donec vitae semper, quis finibus mauris. Morbi tortor</p>
                  <h2 className="p-num">02.</h2>
                </div>
                {}
              </li>
              <li>
                <div className="proz-mint">
                  <h3>Build</h3>
                  <p>Donec vitae semper, quis finibus mauris. Morbi tortor</p>
                  <h2 className="p-num">04.</h2>
                </div>
                {}
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          {}
        </div>
      </section>
    );
  }
}

export default Works;
