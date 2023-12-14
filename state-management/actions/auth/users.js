import { CURRENT_USER, USER_FORMDATA, NEW_USER } from "../../types/types";
import { getErrors } from "../errors/errors";
import { CommonActions } from "@react-navigation/native";

export const details = (data, navigation) => (dispatch) => {
  console.log(data);
  dispatch({ type: NEW_USER, payload: data });
  navigation.navigate("Home");
};

export const update = (data, navigation) => (dispatch) => {
  console.log(data);
  dispatch({ type: NEW_USER, payload: data });
  navigation.navigate("Home");
};

// export const createUser = (user, navigation) => (dispatch) => {
//   axios
//     .post("/api/create-user/", { user })
//     .then((res) => {
//       navigation.navigate("Login");
//       console.log(res);
//     })
//     .catch((err) => {
//       dispatch(getErrors(err.response));
//     });
// };

// export const login = (user, navigation, handleLoading) => (dispatch) => {
//   handleLoading(true);
//   axios
//     .post("/wp-json/jwt-auth/v1/token", user)
//     .then((res) => {
//       console.log(res.data);

//       const token = res.data.token;
//       storeData(token);
//       getData();
//       dispatch({
//         type: CURRENT_USER,
//         payload: res.data,
//       });
//       handleLoading(false);

//       navigation.dispatch(
//         CommonActions.reset({
//           index: 1,
//           routes: [{ name: "Profile" }],
//         })
//       );
//       // navigation.navigate("Profile");
//     })
//     .catch((err) => {
//       handleLoading(false);

//       console.log("here", err.response.data);
//       dispatch(getErrors(err.response));
//     });
// };

// export const mergeUserData = (userData) => (dispatch) => {
//   dispatch({
//     type: USER_FORMDATA,
//     payload: userData,
//   });
// };

// const storeData = () => async (dispatch) => {
//   try {
//     await AsyncStorage.setItem("token", value);
//   } catch (e) {
//     dispatch(getErrors(e));
//   }
// };

// const getData = async () => {
//   console.log("here");
//   try {
//     const value = await AsyncStorage.getItem("token");
//     // console.log(value);

//     if (value !== null) {
//       console.log(value);
//     }
//   } catch (e) {
//     console.log(e);
//     // dispatch(getErrors(e));
//   }
// };
