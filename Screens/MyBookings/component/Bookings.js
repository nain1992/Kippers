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
  const { handleCurrentBooking, currentBooking } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleCurrentBooking("Active")}
        style={[
          styles.ActiveBody,
          {
            borderColor: currentBooking === "Active" ? light.Btn : "#9E9E9E",
          },
        ]}
      >
        <Text
          style={[
            styles.TitleText,
            {
              color: currentBooking === "Active" ? light.Btn : "#9E9E9E",
            },
          ]}
        >
          Active
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleCurrentBooking("Completed")}
        style={[
          styles.ActiveBody,
          {
            borderColor: currentBooking === "Completed" ? light.Btn : "#9E9E9E",
          },
        ]}
      >
        <Text
          style={[
            styles.TitleText,
            {
              color: currentBooking === "Completed" ? light.Btn : "#9E9E9E",
            },
          ]}
        >
          Completed
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
