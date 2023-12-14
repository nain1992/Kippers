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
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const TrustedPartner = (props) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <View style={styles.ImgWrapper}>
        <Image
          source={require("../../../assets/BlackLogo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.TextWrapper}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.SmartText}>Smart Rent</Text>
          <View style={styles.IconBody}>
            <Image
              source={require("../../../assets/Vector.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.AuthorizedText}>
          Authorized Partner{"\n"}103 Vehicles
        </Text>
      </View>
      <View style={styles.CalWrapper}>
        <TouchableOpacity>
          <Ionicons name="call" size={hp("2.5%")} color="#1D1138" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="whatsapp" size={hp("2.5%")} color="#1D1138" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("11%"),
    width: wp("90%"),
    backgroundColor: light.bgLight,
    borderRadius: 10,
    shadowColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    justifyContent: "space-around",
    marginVertical: hp("1%"),
  },
  ImgWrapper: {
    height: "100%",
    width: "25%",
  },
  IconBody: {
    height: 10,
    width: 10,
  },
  AuthorizedText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#616161",
  },
  SmartText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
  },
  TextWrapper: {
    padding: 10,
    flex: 1,
  },
  CalWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "20%",
    alignSelf: "flex-end",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TrustedPartner);
