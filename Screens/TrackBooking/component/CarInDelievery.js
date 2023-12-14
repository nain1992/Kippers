import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const TrackBooking = (props) => {
  const { item } = props;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.ImgWrappr}>
          <Image
            source={require("../../../assets/DelieveryVector4.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.ImgWrappr}>
          <Image
            source={require("../../../assets/DelieveryVector3.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.ImgWrappr}>
          <Image
            source={require("../../../assets/DelieveryVector2.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.ImgWrappr}>
          <Image
            source={require("../../../assets/DelieveryVector1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles.CarText}>Car In Delievery (Train)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    height: hp("13%"),
    width: wp("90%"),
    alignSelf: "center",
  },
  ImgWrappr: {
    width: wp("10%"),
    height: hp("8%"),
  },
  CarText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TrackBooking);
