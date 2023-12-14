import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const Bookings = (props) => {
  const { handleCurrentPage, currentPage } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleCurrentPage("FAQS")}
        style={[
          styles.ActiveBody,
          {
            borderColor: currentPage === "FAQS" ? light.Btn : "#9E9E9E",
          },
        ]}
      >
        <Text
          style={[
            styles.TitleText,
            {
              color: currentPage === "FAQS" ? light.Btn : "#9E9E9E",
            },
          ]}
        >
          FAQS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCurrentPage("Contact us")}
        style={[
          styles.ActiveBody,
          {
            borderColor: currentPage === "Contact us" ? light.Btn : "#9E9E9E",
          },
        ]}
      >
        <Text
          style={[
            styles.TitleText,
            {
              color: currentPage === "Contact us" ? light.Btn : "#9E9E9E",
            },
          ]}
        >
          Contact us
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  ActiveBody: {
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: "#9E9E9E",
    width: "50%",
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: "#9E9E9E",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Bookings);
