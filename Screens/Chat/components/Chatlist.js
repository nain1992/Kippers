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

const Chatlist = (props) => {
  const { item, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.ImageBody}>
        <Image
          source={item?.Image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.NameWrapper}>
        <Text style={styles.NameText}>{item?.textname}</Text>
        <Text style={styles.NumText}>{item?.textnum}</Text>
      </View>
      <Text style={styles.timetext}>09:15</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginVertical: hp("1%"),
    height: hp("8%"),
  },
  ImageBody: {
    height: hp("6%"),
    width: hp("6%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  NameWrapper: {
    flex: 1,
    paddingLeft: 15,
  },
  NameText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
  NumText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#616161",
  },
  timetext: {
    fontFamily: "UR",
    fontSize: rf(10),
    color: "#616161",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Chatlist);
