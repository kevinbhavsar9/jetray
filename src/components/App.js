import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
// d04c6001
import { addMovies, setShowFavourites } from '../actions'
import {connect} from '../index';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // .subscribe() take function as a argument
    // store.subscribe(() => {
    //   console.log('UPDATED');
    //   console.log('state', this.props);
    //   this.forceUpdate();
    // })
    //make api call
    //dispatch action
    this.props.dispatch(addMovies(data));
    // console.log('state',this.props.store.getState())
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    return index === -1 ? false : true
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val))
  }

  render() {
    const { movies,search } = this.props; //{movies:{},search:{}}
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;



    return (
      <div className="App">
        <Navbar 
           
           search={search}

        />
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
                dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=><App store={store}/>}
//       </StoreContext.Consumer>

//     );
//   }
// }
// data needed from the store
// which component need to be connected to the store  
function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search 
  }
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
