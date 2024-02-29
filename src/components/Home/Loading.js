import React from "react";
import $ from "jquery";

class Loading extends React.Component {
  componentDidMount() {
    $(window).on("load", function() {
      $(".page-loading").fadeOut();
    });
  }
  render() {
    return (
      <div className="page-loading">
        <div className="thecube">
          <div className="cube c1" />
          <div className="cube c2" />
          <div className="cube c4" />
          <div className="cube c3" />
        </div>
      </div>
    );
  }
}

export default Loading;
