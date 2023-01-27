import React from "react";
import Searchbar from "../components/Searchbar";
import Movies from "../components/Movies";
class Main extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3f7c9943&s=terminator")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies=(text, type="all")=>{
  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=3f7c9943&s=${text}${type !== "all" ? `&type=${type}`:""}`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    return (
      <div className="container">
        <Searchbar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}
export default Main;
