import {
  CURRENT_USER,
  NEW_USER,
  USER_FORMDATA,
  USER_NUM,
} from "../types/types";

const initialState = {
  current_user: {},
  user_formData: { test: "", test2: "" },
  new_user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        current_user: action.payload,
      };
    case NEW_USER:
      return {
        ...state,
        new_user: { ...state.new_user, ...action.payload },
      };

    default:
      return state;
  }
};

export default userReducer;
