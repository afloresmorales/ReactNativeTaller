import {actionTypes} from '../constants/actionTypes';

export const initialState = {
  favoriteMovie: '',
};

function movies(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_FAVORITE_MOVIE:
      return {favoriteMovie: action.favoriteMovie};
    default:
      return state;
  }
}
export default movies;
