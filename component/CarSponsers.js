import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { dark, light } from "../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const CarSponser = (props) => {
  const { item } = props;
  return (
    <View style={styles.BodyWRapper}>
      <TouchableOpacity onPress={props?.onPress} style={styles.container}>
        {props?.Icon == true ? (
          <Ionicons
            name="ellipsis-horizontal-circle"
            size={hp("3.5%")}
            color="#fff"
          />
        ) : (
          <Image
            source={props?.Img}
            style={{ height: "45%", width: "45%" }}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
      <Text style={styles.NAmeText}>{props?.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: hp("7%"),
    backgroundColor: "#2F33B8",
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
  BodyWRapper: {
    height: hp("13%"),
    width: hp("10%"),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  NAmeText: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: "#424242",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(CarSponser);
