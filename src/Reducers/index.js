import {ADD_MOVIES,ADD_FAVOURITE,ADD_UNFAVOURITE,SET_SHOW_FAVOURITES} from '../actions'
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export default function movies (state=initialMovieState,action){

    // if(action.type===ADD_MOVIES){
    //     return {
    //        ...state,
    //        list:action.movies

    //     };
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            console.log('fav')
            return{
                ...state, 
                favourites:[action.movie,...state.favourites]
            }
        case ADD_UNFAVOURITE:
            const index=state.favourites.indexOf(action.movie);
            console.log('unfav')
           state.favourites.splice(index,1);
          
            return{
                ...state
            }
        case SET_SHOW_FAVOURITES:
      
          
            return{
                ...state,
                showFavourites:action.val 
            }
        default:
            return state;
    }
} 