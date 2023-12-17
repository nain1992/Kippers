import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";
import { Entypo } from "@expo/vector-icons";

const TextFields = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderWidth: props?.borderWidth,
        },
      ]}
    >
      {props?.Icon}

      <TextInput
        onPressIn={props?.onPress}
        placeholder={props?.placeholder}
        placeholderTextColor={"#9E9E9E"}
        style={styles.FieldText}
        secureTextEntry={props?.secureTextEntry}
        onChangeText={props?.onChangeText}
        multiline={props.multiline}
      />

      <TouchableOpacity onPress={props?.onEyePress}>
        {props?.Eye}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("90%"),
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    borderRadius: 10,
    overflow: "hidden",
  },
  FieldText: {
    // height: "100%",
    width: "85%",
    fontFamily: "UB",
    fontSize: rf(12),
    color: light.textStandard,
    marginHorizontal: 5,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TextFields);
