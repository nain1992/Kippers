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

const ForgotHeader = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons name="arrow-back" size={hp("3%")} color="#212121" />
        </TouchableOpacity>
        <Text style={styles.Text}>{item?.Title}</Text>
      </View>
      {props?.SearchICon == true ? (
        <TouchableOpacity>
          <Ionicons name="search-outline" size={hp("3%")} color="#212121" />
        </TouchableOpacity>
      ) : null}
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
    justifyContent: "space-between",
    paddingTop: hp("2%"),
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
export default connect(mapStateToProps)(ForgotHeader);
