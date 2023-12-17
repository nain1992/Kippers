import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";
import { TextInput } from "react-native";

const Fields = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{props?.title}</Text>
      <View style={styles.fieldbody}>
        <TextInput
          {...props}
          placeholderTextColor={"#B8B7B7"}
          style={styles.inputstyles}
          multiline
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
    height: hp("13%"),
    justifyContent: "space-around",
  },
  titletext: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
  },
  fieldbody: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  inputstyles: {
    width: "100%",
    fontFamily: "UR",
    fontSize: rf(11),
    color: "#000000",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Fields);
