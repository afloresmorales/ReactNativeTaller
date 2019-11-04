import {actionTypes} from '../constants/actionTypes';

export function saveFavoriteMovie(favoriteMovie) {
  return {
    type: actionTypes.SAVE_FAVORITE_MOVIE,
    favoriteMovie,
  };
}
export function saveRestaurantsList(favoriteRestaurants) {
  console.log('favoriteRestaurants: ', favoriteRestaurants);
  return {
    type: actionTypes.SAVE_RESTAURANTS_LIST,
    favoriteRestaurants,
  };
}
