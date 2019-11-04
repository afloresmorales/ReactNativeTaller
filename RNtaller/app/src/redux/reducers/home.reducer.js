import {actionTypes} from '../constants/actionTypes';

export const initialState = {
  restaurants: [],
};

function home(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_RESTAURANTS_LIST:
      return {restaurants: action.favoriteRestaurants};
    default:
      return state;
  }
}
export default home;
