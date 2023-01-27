import React from "react";
import Movie from "./Movie";
class Movies extends React.Component {
  state = {  } 
  render() { 
    const {movies=[]}=this.props
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <div>
            <section className="page_404">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 ">
                    <div className="col-sm-10 col-sm-offset-1  text-center">
                      <div className="four_zero_four_bg">
                        <h2 className="text-center ">Natija topilmadi😥</h2>
                      </div>

                      <div className="contant_box_404">
                        <a href="index.html" className="link_404">
                          Orqaga qaytish
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}
 
export default Movies;