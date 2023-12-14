import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import * as firebase from "firebase";
export const BackAction = (props) => {
  const user = firebase.auth().currentUser;
  user ? BackHandler.exitApp() : props.navigation.navigate("LoginScreen");
};


