import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS_IN_BASKET } from "../actions/types";
const initialState = {
  basketNumber: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return {
        basketNumber: state.basketNumber + 1,
      };
    case GET_NUMBERS_IN_BASKET:
      return { ...state };
    default:
      return state;
  }
};
