import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import mainReducer from "./mainReducer";
export default combineReducers({
  errors: errorReducer,
  user_data: userReducer,
  theme: themeReducer,
  main: mainReducer,
});
