import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./assets/css/line-awesome.min.css";
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/color.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// import "./assets/js/wow.min.js"
import "./assets/js/popper.js";
import "./assets/js/bootstrap.min.js";
// import "./assets/js/plugin/slick.min";
import "./assets/js/plugin/html5lightbox.js";
import "./assets/js/placeholdem.min.js";

import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html" component={Home} />
    </Switch>
  );
}

export default App;
