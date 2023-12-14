import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Incoming = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.imagebody}>
          <Image
            source={props?.image}
            style={{ height: "100%", width: "100" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.msgbody}>
          <Text style={styles.msgtext}>{props?.msg}</Text>
        </View>
      </View>
      <Text style={styles.timemsg}>{props?.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: wp("5%"),
    marginVertical: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagebody: {
    height: hp("5%"),
    width: hp("5%"),
    overflow: "hidden",
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#FDAE44",
  },
  msgbody: {
    backgroundColor: "#E8E8E8",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    maxWidth: wp("75%"),
  },
  msgtext: {
    fontFamily: "UB",
    fontSize: rf(12),
    color: "#5A5A5A",
  },
  timemsg: {
    fontFamily: "UR",
    fontSize: rf(10),
    color: "#5A5A5A",
    marginLeft: wp("12%"),
    marginVertical: 5,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Incoming);
