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
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const RentCar = (props) => {
  const { item, data } = props;

  return (
    <>
      <TouchableOpacity onPress={props?.onPress} style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.PicBody}>
            <Image
              source={require("../../../assets/CarLogo.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.RentText}>{item?.monthly}</Text>
              <View style={styles.IconBody}>
                <Image
                  source={require("../../../assets/Vector.png")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Text style={styles.AuthoText}>{item?.authorize}</Text>
          </View>
        </View>
        <View style={styles.IconsWRapper}>
          <TouchableOpacity
          onPress={props?.onMsgPress}
          >
            <AntDesign name="message1" size={hp("3%")} color="#FF1111" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.PricerWrapper}>
        <View>
          <Text style={styles.MonthlyText}>{item?.rental}</Text>
          <Text style={styles.PriceTag}>{data?.item?.disprice}</Text>
        </View>
        <TouchableOpacity
          onPress={props?.onRentPress}
          style={styles.RentNowBtn}
        >
          <Text style={styles.BtnText}>RENT NOW</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    marginVertical: hp("2%"),
  },
  PicBody: {
    height: hp("8%"),
    width: hp("8%"),
    overflow: "hidden",
  },
  IconBody: {
    height: 10,
    width: 10,
    overflow: "hidden",
  },
  RentText: {
    fontFamily: "UB",
    fontSize: rf(16),
    color: "#212121",
    marginLeft: 10,
  },
  AuthoText: {
    fontFamily: "UR",
    fontSize: rf(13),
    color: "#616161",
    marginLeft: 10,
  },
  IconsWRapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.5,
    justifyContent: "space-around",
  },
  PricerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  MonthlyText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#757575",
  },
  PriceTag: {
    fontFamily: "UB",
    fontSize: rf(16),
    color: light.textStandard,
  },
  RentNowBtn: {
    height: hp("7.5%"),
    width: wp("45%"),
    backgroundColor: light.Btn,
    borderRadius: 100,
    justifyContent: "center",
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
  BtnText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(RentCar);
