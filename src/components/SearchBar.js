import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search">
            <input
              placeholder="Search..."
              type="text"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
