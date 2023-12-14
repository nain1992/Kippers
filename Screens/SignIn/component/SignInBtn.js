import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const SignInBtn = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.FrameWrapper}>
        <Image
          source={props?.Image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.TitleText}>{props?.Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  FrameWrapper: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(SignInBtn);
