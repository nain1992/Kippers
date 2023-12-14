import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../scheme";
const FeatureCars = (props) => {
  const { title, byclass, handleClass } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: title === byclass ? light.Btn : "transparent",
        },
      ]}
      onPress={() => handleClass(title)}
    >
      <Text
        style={[
          styles.TitleText,
          {
            color: title === byclass ? "#fff" : light.Btn,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("4%"),
    height: hp("4.5%"),
    minWidth: wp("15%"),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: light.Btn,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: "#1D1138",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(FeatureCars);
