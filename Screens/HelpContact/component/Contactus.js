import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const Contactus = (props) => {
  const { item } = props;
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={styles.ImageView}>
          <Image
            source={props?.image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.titleText}>{props?.title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("8%"),
    width: wp("90%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: light.bgLight,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  ImageView: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  titleText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Contactus);
