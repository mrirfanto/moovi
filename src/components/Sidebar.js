import React from "react";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  state = {
    showSidebar: false,
  };

  renderGenreList = (genres) => {
    if (genres.length > 0) {
      return genres.map((genre) => {
        return <li>{genre.name}</li>;
      });
    }
    return "";
  };
  render() {
    const { movieGenres } = this.props;
    return (
      <div
        className="sidebar"
        style={{
          transform: this.state.showSidebar
            ? "translateX(0)"
            : "translate(-300px)",
        }}
      >
        <button
          className="btn-sidebar"
          onClick={() =>
            this.setState({ showSidebar: !this.state.showSidebar })
          }
        >
          <i className="fas fa-bars"></i>
        </button>
        <h1 className="section-title">Categories</h1>
        <ul>{this.renderGenreList(movieGenres)}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ movieGenres }) => {
  return {
    movieGenres,
  };
};
export default connect(mapStateToProps)(Sidebar);
