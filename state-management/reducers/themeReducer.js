import { CHANGE_THEME, GET_ERRORS } from "../types/types";

const initialState = {
  theme: {},
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
