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
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";
const PasswordField = (props) => {
  const [toggle, setToggle] = useState(true);

  return (
    <View style={styles.container}>
      <MaterialIcons name="lock" size={hp("2%")} color="#212121" />

      <TextInput
        placeholder={props?.placeholder}
        placeholderTextColor="#212121"
        style={styles.TextInput}
        secureTextEntry={toggle ? true : false}
        onChangeText={props?.onChangeText}
      />
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        {toggle ? (
          <Entypo name="eye-with-line" size={hp("2%")} color="#212121" />
        ) : (
          <Entypo name="eye" size={hp("2%")} color="#212121" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("90%"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  TextInput: {
    height: "100%",
    width: "80%",
    fontFamily: "UB",
    fontSize: rf(12),
    color: light.textStandard,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(PasswordField);
