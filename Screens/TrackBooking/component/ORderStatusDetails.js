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
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const TrackBooking = (props) => {
  const { item, title, currentOrder, OrderStatushandler } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.OrderStatushandler(props?.title)}
        style={styles.CircleBody}
      >
        {props?.current === title ? (
          <View style={styles.InnerCircleBody}></View>
        ) : null}
      </TouchableOpacity>
      <Text
        style={[
          styles.ORderText,
          {
            color: props?.current === title ? "#1D1138" : "#9E9E9E",
          },
        ]}
      >
        {props?.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
  },
  CircleBody: {
    height: hp("3%"),
    width: hp("3%"),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: light.textStandard,
    justifyContent: "center",
    alignItems: "center",
  },
  InnerCircleBody: {
    height: hp("1.5%"),
    width: hp("1.5%"),
    borderRadius: 10,
    backgroundColor: light.textStandard,
    justifyContent: "center",
    alignItems: "center",
  },
  ORderText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TrackBooking);
