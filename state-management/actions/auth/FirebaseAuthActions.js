import {
  DO_LOGIN,
  GET_ERRORS,
  DO_LOGOUT,
  GET_USER_DETAILS,
  DO_SIGNUP,
} from "../../types/types";
import * as firebase from "firebase";

export const logout = () => async (dispatch) => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("user logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e });
  }
};

export const signup = (data, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        db.collection("users")
          .doc(user.uid)
          .set(data)
          .then(function (res) {
            dispatch({ type: DO_SIGNUP, payload: user });
            setLoading(false);
          })
          .catch((e) => {
            dispatch({ type: GET_ERRORS, payload: e.message });
            setLoading(false);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch({ type: GET_ERRORS, payload: errorMessage });
        setLoading(false);
        // ..
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e });
    console.log(e.message);
    setLoading(false);
  }
};

export const login = (email, password, setLoading) => async (dispatch) => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        dispatch({ type: DO_LOGIN, payload: user });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        setLoading(false);
      });
  } catch (e) {
    dispatch({ type: GET_ERRORS, payload: e });
    console.log(e.message);
    setLoading(false);
  }
};

export const getUserData = (id, setLoading) => async (dispatch) => {
  var db = firebase.firestore();
  var docRef = db.collection("users").doc(id);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({ type: GET_USER_DETAILS, payload: doc.data() });
        setLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: GET_ERRORS, payload: error });
      setLoading(false);
    });
};

export const forgotPassword = (email, setLoading) => async (dispatch) => {
  try {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        alert("Check your email to reset password!");
      })
      .catch((error) => {
        var errorMessage = error.message;
        setLoading(false);
        alert(errorMessage);
      });
  } catch (e) {
    setLoading(false);
    alert(error.message);
  }
};

export const changePassword = (data, setLoading) => async (dispatch) => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.oldPass)
      .then((userCredential) => {
        userCredential.user
          .updatePassword(data.newPass)
          .then(() => {
            setLoading(false);
            alert("Password Updated");
          })
          .catch((error) => {
            setLoading(false);
            alert(error.message);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        setLoading(false);
      });
  } catch (e) {
    setLoading(false);
    alert(e.message);
  }
};
