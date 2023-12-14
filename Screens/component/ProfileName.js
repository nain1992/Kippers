import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { AntDesign } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { data } from "../../data/dummydata";

const ProfileName = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <View style={styles.PRofileWrapper}>
        <View style={styles.PicWrapper}>
          <Image
            source={item?.Image}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View>
          <Text style={styles.TextGood}>{item?.Text}</Text>
          <Text style={styles.NAmeText}>Nain</Text>
        </View>
      </View>
      <View style={styles.SearchBarBody}>
        <TouchableOpacity>
          <AntDesign name="search1" size={hp("2%")} color="#BDBDBD" />
        </TouchableOpacity>
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          placeholderTextColor={"#BDBDBD"}
        />
        <TouchableOpacity
          onPress={props?.onPress}
          style={{ height: 15, width: 15, overflow: "hidden" }}
        >
          <Image
            source={require("../../assets/Filter.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    justifyContent: "center",
    height: hp("23%"),
    justifyContent: "space-evenly",
    paddingTop: hp("2%"),
  },
  PicWrapper: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  TextGood: {
    fontFamily: "UR",
    fontSize: rf(14),
    color: "#757575",
    marginLeft: wp("3%"),
  },
  NAmeText: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    marginLeft: wp("3%"),
  },
  SearchBarBody: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#F9F9F9",
    marginTop: hp("2%"),
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  PRofileWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextInput: {
    height: "100%",
    width: "85%",
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#222",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ProfileName);
