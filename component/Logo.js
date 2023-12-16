import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

const Logo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.BackWrapper}>
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons name="arrow-back" size={hp("3%")} color="#212121" />
        </TouchableOpacity>
      </View>
      <View style={styles.logocontainer}>
        <View style={styles.LogoWrapper}>
          <Image
            source={require("../assets/Logo.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    paddingTop: hp("2%"),
  },
  BackWrapper: {
    height: hp("8%"),
    justifyContent: "center",
    paddingLeft: wp("5%"),
  },
  LogoWrapper: {
    height: "80%",
    width: "80%",
  },
  logocontainer: {
    height: hp("20%"),
    width: wp("100%"),
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Logo);
