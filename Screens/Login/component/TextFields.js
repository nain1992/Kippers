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

      <View style={styles.inputstyles}>
        <TextInput
          onPressIn={props?.onPress}
          placeholder={props?.placeholder}
          placeholderTextColor={"#9E9E9E"}
          style={styles.FieldText}
          secureTextEntry={props?.secureTextEntry}
          onChangeText={props?.onChangeText}
          multiline={props.multiline}
        />
      </View>

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
    fontFamily: "UB",
    fontSize: rf(12),
    color: light.textStandard,
  },
  inputstyles: {
    width: "85%",
    marginHorizontal: 5,
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TextFields);
