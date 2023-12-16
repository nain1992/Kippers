import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../scheme";

const StandardBtn = (props) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <Text style={styles.TextBtn}>{props?.Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 100,
    backgroundColor: light.Btn,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextBtn: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.BtnText,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(StandardBtn);
