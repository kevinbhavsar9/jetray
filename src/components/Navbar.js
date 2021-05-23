// import { render } from "@testing-library/react";
import React from "react";
import { connect } from "../index";
import { handleMovieSearch,addMovieToList } from '../actions'



class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // showSearchResults: false,
            searchText: ''
        };
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));

    }


    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
        // console.log(e.target.value)
    }
    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie))
    }
    render() {
        const { result,showSearchResults } = this.props.search;
      
        return ( 
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster } alt="search-pic" />
                                <div className="movie-info">
                                    <span>{ result.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }

}

// class NavbarWrapper extends React.Component{
//     render(){
//         return (<StoreContext.Consumer>
//             {(store)=><Navbar dispatch={store.dispatch} search={this.props}/>}
//         </StoreContext.Consumer>);
        
//     }
// }

function mapStoreToProps(state){
    return{
        movies:state.movies,
        search:state.search 
    }
}

const connectedNavbarComponent=connect(mapStoreToProps)(Navbar);
export default connectedNavbarComponent;
