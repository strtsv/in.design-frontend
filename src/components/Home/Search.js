import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="header-search d-flex flex-wrap justify-content-center align-items-center w-100">
        <span className="search-close-btn">
          <i className="fas fa-times" />
        </span>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
