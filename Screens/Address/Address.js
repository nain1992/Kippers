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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { Ionicons } from "@expo/vector-icons";
import { AddressHeader } from "../../data/dummydata";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import AddressDetails from "./component/AddressDetails";
import StandardBtn from "../../component/StandardBtn";

const Address = (props) => {
  const [currentDeliveryAddress, setCurrentDeliverAddress] = useState("Home");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      {AddressHeader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <ScrollView>
        <View style={{ marginBottom: hp("8%") }}>
          <View style={styles.Wrapper}>
            <AddressDetails
              title={"Home"}
              Address={"61480 Sunbrook Park, PC 5679"}
              current={currentDeliveryAddress}
              Defualt
              onPress={() => props.navigation.navigate("AddNewAddress")}
            />
            <AddressDetails
              title={"Office"}
              current={currentDeliveryAddress}
              Address={"6993 Meadow Valley Terra, PC 3637"}
              onPress={() => props.navigation.navigate("AddNewAddress")}
            />
            <AddressDetails
              title={"Apartment"}
              current={currentDeliveryAddress}
              Address={"21833 Clyde Gallagher, PC 4662"}
              onPress={() => props.navigation.navigate("AddNewAddress")}
            />
            <AddressDetails
              title={"Parent's House"}
              current={currentDeliveryAddress}
              Address={"5259 Blue Bill Park, PC 4627"}
              onPress={() => props.navigation.navigate("AddNewAddress")}
            />
            <AddressDetails
              title={"Town Sqaure"}
              current={currentDeliveryAddress}
              Address={"5375 Summerhouse, PC 4627"}
              onPress={() => props.navigation.navigate("AddNewAddress")}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.BtnWrapper}>
        <StandardBtn
          Title="Add New Address"
          onPress={() => props.navigation.navigate("AddNewAddress")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  Wrapper: {
    justifyContent: "space-around",
  },
  BtnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: hp("3%"),
  },
  AddnewAdresBtn: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 100,
    backgroundColor: "#E7E7E7",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextBtn: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: "#35383F",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Address);
