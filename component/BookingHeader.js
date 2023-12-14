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
import { dark, light } from "../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const BookingHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.CarView}>
        <Image
          source={require("../assets/CarVector.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.Text}>{props?.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("10%"),
    width: wp("100%"),
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    paddingTop: hp("2%"),
  },
  CarView: {
    height: 15,
    width: 25,
    overflow: "hidden",
    justifyContent: "center",
  },
  Text: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    marginLeft: wp("4%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(BookingHeader);
