import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import BottomTabMenu from "../../component/BottomTabMenu";
import { light } from "../../scheme";
import Fields from "./components/Fields";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

const Addcar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.addcartext}>Add Car</Text>
      <KeyboardAvoidingScrollView>
        <View style={styles.uploadwrapper}>
          <TouchableOpacity style={styles.uploadbody}>
            <Text style={styles.uploadtext}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <Fields title={"Car name"} placeholder="Enter car name" />
        <Fields title={"Car Model"} placeholder="Enter car name" />
        <Fields title={"Car Brand"} placeholder="Enter car name" />
        <Fields title={"Seating Capacity"} placeholder="Enter car name" />
        <Fields title={"Rental Price"} placeholder="Enter car name" />
      </KeyboardAvoidingScrollView>
      <BottomTabMenu activeicon={"Addcar"} navigation={props?.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  addcartext: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    marginLeft: wp("4%"),
    marginTop: hp("3%"),
  },
  uploadwrapper: {
    height: hp("13%"),
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  uploadbody: {
    height: hp("6.5%"),
    width: wp("90%"),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    alignSelf: "center",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadtext: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: light.textStandard,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Addcar);
