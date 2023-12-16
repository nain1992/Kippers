import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import { light } from "../../scheme";
import { PartnerTrusted } from "../../data/dummydata";
import TrustedComponent from "./component/TrustedComponent";

const TrustedPartner = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {PartnerTrusted.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <View style={styles.TextWrapper}>
        <Text style={styles.PartnerText}>
          We have partnered up with leading fleet{"\n"}carriers in UAE. Please
          check their listings.
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Wrapper}>
          <TrustedComponent
            onPress={() => props.navigation.navigate("Partner")}
          />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
          <TrustedComponent />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  TextWrapper: {
    paddingHorizontal: wp("5%"),
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  PartnerText: {
    fontFamily: "UR",
    fontSize: rf(15),
    color: light.textStandard,
    textAlign: "center",
  },
  Wrapper: {
    alignItems: "center",
    width: wp("100%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TrustedPartner);
