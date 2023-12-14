import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
import Logo from "../../component/Logo";
import SignInBtn from "./component/SignInBtn";
import StandardBtn from "../../component/StandardBtn";

const SignIn = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo onPress={() => props.navigation.goBack()} />
      <View style={styles.TitleTextWrapper}>
        <Text style={styles.TitleText}>Let’s you in</Text>
      </View>
      <View style={styles.Wrapper}>
        <SignInBtn
          Image={require("../../assets/Fbb.png")}
          Title="Continue with Facebook"
        />
        <SignInBtn
          Image={require("../../assets/Google.png")}
          Title="Continue with Google"
        />
        <SignInBtn
          Image={require("../../assets/Apple.png")}
          Title="Continue with Apple"
        />
      </View>
      <View style={styles.OrWrapper}>
        <View style={styles.BorderView}></View>
        <Text style={styles.OrText}>or</Text>

        <View style={styles.BorderView}></View>
      </View>
      <View style={styles.BtnWrapper}>
        <StandardBtn
          Title={"Sign in with e-mail"}
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
      <View style={styles.SignuTextWrapper}>
        <Text style={styles.DontText}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CreateAccount")}
        >
          <Text style={styles.SignText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(30),
    color: light.textStandard,
  },
  TitleTextWrapper: {
    alignItems: "center",
  },
  Wrapper: {
    alignItems: "center",
    height: hp("25%"),
    justifyContent: "space-between",
    marginTop: hp("3%"),
  },
  OrWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    alignSelf: "center",
    height: hp("8%"),
  },
  BorderView: {
    flex: 1,
    borderColor: "#EEEEEE",
    borderWidth: 1,
  },
  OrText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: "#616161",
    marginHorizontal: wp("5%"),
  },
  BtnWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: hp("3%"),
  },
  SignuTextWrapper: {
    flex: 0.8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  DontText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#9E9E9E",
  },
  SignText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: light.Btn,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(SignIn);
