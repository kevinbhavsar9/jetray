import { render } from "@testing-library/react";
import React from "react";


class MovieCard extends React.Component {
    render(){
        const {movie}=this.props;
        
        return (
           <div className="movie-card">
              <div className="left">
                  <img alt="movie-poster" src={movie.Poster}/>
              </div> 
              <div className="right">
                  <div className="title">{movie.Title}</div>
                  <div className="Plot">{movie.Plot}</div>
                  <div className="footer">
                      <div className="rating">{movie.imdbRating}</div>
                      <button className="favourite-btn">Favourite</button>

                      </div>
              </div>
           </div>
          );
    }
 
}

export default MovieCard;