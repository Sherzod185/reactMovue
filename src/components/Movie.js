import React from "react";
class Movie extends React.Component {
  state = {  } 
  render() { 
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return (
      <div className="card">
        <div key={imdbID} className="card__img">
          <img src={Poster} alt="" />
        </div>
        <div className="card__info">
          <p>{Type}</p>
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
      </div>
    );
  }
}
 
export default Movie;