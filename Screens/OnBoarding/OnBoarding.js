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
import { dark, light } from "../../scheme";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const OnBoarding = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.BgImageWrapper}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#EE1010", "#CC0E0E"]}
          style={styles.background}
        />
        <View style={styles.framebody}>
          <Image
            source={require("../../assets/car10.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.Wrapper}>
          <View style={styles.WelcomeWrapper}>
            <Text style={styles.welcometext}>Welcome to 👋</Text>
          </View>
          <View style={styles.TextWrapper}>
            <Text style={styles.Kipperstext}>Kipper’s Classics</Text>
          </View>
          <View style={styles.TextWrapper}>
            <Text style={styles.LableText}>
              Rent a Car online Today & Enjoy Best Deals, Rate & Accessories
            </Text>
          </View>
          <TouchableOpacity
            style={styles.BtnBody}
            onPress={() => props.navigation.navigate("SignIn")}
          >
            <View style={styles.btntextbody}>
              <Text style={styles.btntext}>Let's Go</Text>
            </View>
            <View style={styles.vectorbody}>
              <Image
                source={require("../../assets/2.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  Wrapper: {
    height: hp("30%"),
    width: wp("100%"),
    position: "absolute",
    bottom: 20,
    justifyContent: "space-between",
  },
  WelcomeWrapper: {
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: wp("5%"),
  },

  TextWrapper: {
    paddingHorizontal: wp("5%"),
  },
  LableText: {
    fontFamily: "UB",
    color: "#fff",
    fontSize: rf(15),
  },
  BtnBody: {
    height: hp("7%"),
    width: wp("90%"),
    backgroundColor: "#fff",
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btntext: {
    fontFamily: "UB",
    color: "#F51111",
    fontSize: rf(15),
    marginLeft: 15,
  },
  Kipperstext: {
    fontFamily: "UB",
    color: "#fff",
    fontSize: rf(18),
  },
  welcometext: {
    fontFamily: "UB",
    color: "#fff",
    fontSize: rf(25),
  },
  framebody: {
    height: hp("40%"),
    width: hp("100%"),
    alignSelf: "center",
    marginTop: hp("10%"),
  },
  vectorbody: {
    height: 15,
    width: 30,
    overflow: "hidden",
    marginRight: 15,
  },
  btntextbody: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(OnBoarding);
