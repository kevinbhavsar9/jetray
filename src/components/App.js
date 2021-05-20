import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';

import { addMovies, setShowFavourites } from '../actions'

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // .subscribe() take function as a argument
    store.subscribe(() => {
      console.log('UPDATED');
      console.log('state', this.props.store.getState());
      this.forceUpdate();
    })
    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
    // console.log('state',this.props.store.getState())
  }
  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    return index === -1 ? false : true
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`}  onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="List">
            {displayMovies.map((movie, index) => {
              return <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            })}

          </div>
          {displayMovies.length===0?<div className="no-movies">No movies to display!</div>:null}

        </div>

      </div>


     
    );
  }

}

export default App;
