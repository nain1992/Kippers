import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CountryPicker from "react-native-country-codes-picker";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";
import { AntDesign } from "@expo/vector-icons";

const TextFields = (props) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [Picker, setPicker] = useState();

  return (
    <View style={styles.container}>
      {props?.Picker == true ? (
        <TouchableOpacity
          style={styles.CountryPicker}
          onPress={() => setShow(true)}
        >
          <Text
            style={{
              fontFamily: "UB",
              color: "#212121",
              fontSize: rf(12),
            }}
          >
            {countryCode}
          </Text>
          <AntDesign name="down" size={hp("2%")} color="#212121" />
          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </TouchableOpacity>
      ) : null}
      <TextInput
        {...props}
        placeHolderTextColor={"#212121"}
        style={styles.Input}
      />
      <TouchableOpacity onPress={props?.onPress}>
        {props?.Icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("7%"),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FAFAFA",
    overflow: "hidden",
    paddingHorizontal: wp("3%"),
  },
  Input: {
    height: "100%",
    width: "90%",
    fontFamily: "UB",
    color: light.textStandard,
    fontSize: rf(12),
  },
  CountryPicker: {
    width: "15%",
    height: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TextFields);
