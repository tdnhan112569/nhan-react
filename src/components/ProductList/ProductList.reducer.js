import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_ERROR} from "./ProductList.action";

const initialState = {
  result: null,
  load: false,
  fail: null
};

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, load: true };
    case PRODUCT_LIST_SUCCESS:
        console.log("O reducer ne")
        const object = { ...state, load: false, result: action.payload };
        console.log(object)
      return object
    case PRODUCT_LIST_ERROR:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}