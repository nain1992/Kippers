import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../scheme";
import StandardBtn from "../../component/StandardBtn";

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.LogoWrapper}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.btncontainer}>
        <StandardBtn
          Title={"Let's Start"}
          onPress={() => props?.navigation?.navigate("OnBoarding")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
    justifyContent: "center",
    alignItems: "center",
  },
  btncontainer: {
    flex: 0.7,
    backgroundColor: light.bgLight,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  LogoWrapper: {
    height: hp("50%"),
    width: hp("60%"),
    alignItems: "center",
    marginTop: hp("5%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Welcome);
