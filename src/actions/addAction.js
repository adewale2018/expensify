import { ADD_PRODUCT_TO_BASKET } from "./types";

const addToBasket = () => {
  return (dispatch) => {
    console.log("Adding To The Basket...");
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
    });
  };
};

export default addToBasket;
