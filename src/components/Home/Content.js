import React from "react";
import Header from "./Header";
import Search from "./Search";
import Portfolio from "./Portfolio";
import MakeBetter from "./MakeBetter";
import WatchPlay from "./WatchPlay";
import Professionals from "./Professionals";
import Works from "./Works";
import Projects from "./Projects";
import Testi from "./Testi";
import Consultation from "./Consultation";
import BlogNews from "./BlogNews";
import Footer from "./Footer";

class Content extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        {}
        <Search></Search>
        {}
        <Portfolio></Portfolio>
        {}
        <MakeBetter></MakeBetter>
        {}
        <WatchPlay></WatchPlay>
        <Professionals></Professionals>
        <Works></Works>
        <Projects></Projects>
        <Testi></Testi>
        <Consultation></Consultation>
        <BlogNews></BlogNews>
        <Footer></Footer>
        {}
      </div>
    );
  }
}

export default Content;
