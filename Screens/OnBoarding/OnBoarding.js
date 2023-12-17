import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const OnBoarding = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.BgImageWrapper}
        source={require("../../assets/newcar1.jpg")}
      >
        <View style={styles.framewrapper}>
          <View style={styles.framebody}>
            <Image
              source={require("../../assets/newcar4.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.contentwrapper}>
          <Text style={styles.welcome}>Welcome to 👋</Text>
          <View>
            <Text style={styles.kippers}>Kipper’s Classics</Text>
            <Text style={styles.rentcartext}>
              Rent a Car online Today & Enjoy Best Deals, Rate & Accessories
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props?.navigation?.navigate("SignIn")}
            style={styles.btnbody}
          >
            <View style={styles.innertextbody}>
              <Text style={styles.btntext}>Let's Go!</Text>
            </View>
            <View style={styles.iconbody}>
              <Image
                source={require("../../assets/2.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  BgImageWrapper: {
    height: hp("100%"),
    width: wp("100%"),
  },
  framewrapper: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("5%"),
  },
  framebody: {
    height: hp("40%"),
    width: wp("90%"),
    alignSelf: "center",
  },
  contentwrapper: {
    flex: 0.4,
    paddingHorizontal: wp("5%"),
    justifyContent: "space-around",
    marginBottom: hp("5%"),
  },
  welcome: {
    fontFamily: "UB",
    fontSize: rf(28),
    color: light.BtnText,
  },
  kippers: {
    fontFamily: "UB",
    fontSize: rf(22),
    color: light.BtnText,
    marginBottom: 5,
  },
  rentcartext: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.BtnText,
  },
  btnbody: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 100,
    backgroundColor: light.BtnText,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: wp("3%"),
  },
  btntext: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.Btn,
    marginLeft: wp("7%"),
  },
  iconbody: {
    height: 15,
    width: 30,
    overflow: "hidden",
  },
  innertextbody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(OnBoarding);
