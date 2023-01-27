import React from "react";
class Searchbar extends React.Component {
  state = { search: "terminator", type: "all" };

  handText = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
      this.setState({ search: "" });
    }
  };
  handkateg=(e)=>{
    this.setState({
      type: e.target.dataset.type
    }, ()=>{
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }
  render() {
    const { search } = this.state;
    return (
      <div>
        {" "}
        <div className="search-bar">
          <input
          placeholder="Search"
            type="search"
            name="search"
            value={search}
            required
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyUp={this.handText}
            autoComplete="off"
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </div>
        <div className="radio-toggles">
          <input
            type="radio"
            id="option-1"
            name="radio-options"
            data-type="movie"
            onChange={this.handkateg}
            checked={this.state.type === "movie"}
          />
          <label htmlFor="option-1">Movie</label>
          <input
            type="radio"
            id="option-2"
            name="radio-options"
            data-type="all"
            onChange={this.handkateg}
            checked={this.state.type === "all"}
          />
          <label htmlFor="option-2">All</label>
          <input
            type="radio"
            id="option-3"
            name="radio-options"
            data-type="Series"
            onChange={this.handkateg}
            checked={this.state.type === "Series"}
          />
          <label htmlFor="option-3">Series</label>
          <div className="slide-item"></div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
