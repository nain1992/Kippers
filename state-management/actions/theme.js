import { dark, light } from "../../scheme";
import { CHANGE_THEME } from "../types/types";

export const toggleTheme = (currentTheme) => (dispatch) => {
  dispatch({ type: CHANGE_THEME, payload: currentTheme ? dark : light });
};
