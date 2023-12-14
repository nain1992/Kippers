import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../../scheme";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const AddressDetails = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props?.handleDeliveryAddress(props?.title)}
      style={styles.container}
    >
      <View style={styles.LocationIconBody}>
        <Image
          source={require("../../../assets/location.png")}
          style={{ height: "65%", width: "65%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.TextWrapper}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.TitleText}>{props?.title}</Text>
          {props?.Defualt == true ? (
            <View style={styles.DEfaultView}>
              <Text style={styles.DEfautText}>Default</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.AddressText}>{props?.Address}</Text>
      </View>
      <View style={styles.IConBody}>
        {props?.current === props?.title ? (
          <View style={styles.InnerICon}></View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("11%"),
    width: wp("90%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  LocationIconBody: {
    height: hp("6%"),
    width: hp("6%"),
    borderRadius: 100,
    backgroundColor: "rgba(16, 16, 16, 0.12)",
    justifyContent: "center",
    alignItems: "center",
  },
  TextWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: wp("3%"),
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
  },
  AddressText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#616161",
  },
  DEfaultView: {
    height: hp("3%"),
    width: wp("10%"),
    borderRadius: 5,
    backgroundColor: "rgba(16, 16, 16, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  DEfautText: {
    fontFamily: "UR",
    fontSize: rf(8),
    color: "#35383F",
  },
  IConBody: {
    height: hp("2%"),
    width: hp("2%"),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: light.Btn,
  },
  InnerICon: {
    height: "70%",
    width: "70%",
    backgroundColor: light.Btn,
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(AddressDetails);
