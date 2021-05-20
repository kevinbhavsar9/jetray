// {
//     type:"ADD_MOVIES",
//     movies:[m1,m2,m3]
// }

// Action types
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";
export const ADD_UNFAVOURITE="ADD_UNFAVOURITE";
export const SET_SHOW_FAVOURITES ="SET_SHOW_FAVOURITES";

//Action creators
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}
export function addFavourite(movie){
    return {
        type:ADD_FAVOURITE,
        movie
    }
}
export function addUnfavourite(movie){
    return {
        type:ADD_UNFAVOURITE,
        movie
    }
}
export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}