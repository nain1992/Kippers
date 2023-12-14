import { CURRENT_USER, DO_LOGIN, NEW_USER } from "../types/types";
const initialState = {
  login_details: null,
  current_user: null,
  new_user: null,
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        login_details: action.payload,
      };
    case NEW_USER:
      return {
        ...state,
        new_user: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
