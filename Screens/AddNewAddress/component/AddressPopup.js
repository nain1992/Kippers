import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../../scheme";
import MapView from "react-native-maps";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import StandardBtn from "../../../component/StandardBtn";

const AddNewAddress = (props) => {
  const navigation = useNavigation();

  const [checkbox, setCheckBox] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.AddressText}>Address Details</Text>
      <View style={styles.BorderView}></View>
      <Text style={styles.AddressNameText}>Address Name</Text>
      <View style={styles.AddressInputView}>
        <TextInput style={styles.TextIput} placeholder="Home" />
      </View>
      <Text style={styles.AddressNameText}>Address Details</Text>
      <View style={styles.AddressInputView}>
        <TextInput
          style={styles.TextIput}
          placeholder="2899 Summer Drive Taylor, PC 48180"
        />
        <Entypo name="location-pin" size={hp("2%")} color={light.Btn} />
      </View>
      <View style={styles.DefualTAdressWrapper}>
        <TouchableOpacity
          onPress={() => setCheckBox(!checkbox)}
          style={styles.CheckBoxBody}
        >
          {checkbox ? (
            <MaterialIcons name="done" size={hp("2%")} color={light.Btn} />
          ) : null}
        </TouchableOpacity>
        <Text style={styles.DefualtText}>Make this as the default address</Text>
      </View>
      <View style={styles.BtnWrapper}>
        <StandardBtn
          Title="Add"
          onPress={() => navigation.navigate("Address")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("60%"),
    width: wp("100%"),
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: hp("3%"),
  },
  AddressText: {
    textAlign: "center",
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
  BorderView: {
    width: wp("90%"),
    alignSelf: "center",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    marginVertical: hp("1.5%"),
  },
  AddressNameText: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: light.textStandard,
    marginVertical: hp("1.5%"),
  },
  AddressInputView: {
    height: hp("7%"),
    width: wp("90%"),
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  TextIput: {
    width: "90%",
    fontFamily: "UB",
    fontSize: rf(11),
    color: light.textStandard,
  },
  DefualTAdressWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  CheckBoxBody: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: light.Btn,
    justifyContent: "center",
    alignItems: "center",
  },
  DefualtText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: light.textStandard,
    marginLeft: 10,
  },
  BtnWrapper: { marginVertical: hp("2%") },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(AddNewAddress);
