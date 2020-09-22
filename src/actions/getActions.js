import { GET_NUMBERS_IN_BASKET } from "../actions/types";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting ALL..");
    dispatch({
      type: GET_NUMBERS_IN_BASKET,
    });
  };
};
