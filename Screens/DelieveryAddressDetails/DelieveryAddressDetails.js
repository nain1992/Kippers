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
  Modal,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import AddressDetails from "./component/AddressDetails";
import StandardBtn from "../../component/StandardBtn";
import { AddressCar } from "../../data/dummydata";

const DelieveryAddressDetails = (props) => {
  const data = props?.route?.params;
  const [currentDeliveryAddress, setCurrentDeliverAddress] = useState("Home");
  const [successpopup, setSuccessPopup] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      {AddressCar.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <View style={styles.Wrapper}>
        <AddressDetails
          title={"Home"}
          Address={"61480 Sunbrook Park, PC 5679"}
          current={currentDeliveryAddress}
          handleDeliveryAddress={setCurrentDeliverAddress}
          Defualt
        />
        <AddressDetails
          title={"Office"}
          current={currentDeliveryAddress}
          handleDeliveryAddress={setCurrentDeliverAddress}
          Address={"6993 Meadow Valley Terra, PC 3637"}
        />
        <AddressDetails
          title={"Apartment"}
          current={currentDeliveryAddress}
          handleDeliveryAddress={setCurrentDeliverAddress}
          Address={"21833 Clyde Gallagher, PC 4662"}
        />
        <AddressDetails
          title={"Parent's House"}
          current={currentDeliveryAddress}
          handleDeliveryAddress={setCurrentDeliverAddress}
          Address={"5259 Blue Bill Park, PC 4627"}
        />
      </View>
      <View style={styles.BtnWrapper}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("AddNewAddress")}
          style={styles.AddnewAdresBtn}
        >
          <Text style={styles.TextBtn}>Add New Address</Text>
        </TouchableOpacity>
        <StandardBtn Title="Apply" onPress={() => setSuccessPopup(true)} />
      </View>
      {successpopup == true ? (
        <Modal transparent={true} animationType="fade">
          <View style={{ flex: 1, backgroundColor: "#000000aa" }}>
            <View style={styles.SuccessPopup}>
              <View style={styles.ImageWraper}>
                <Image
                  source={require("../../assets/Group1.png")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={styles.CongratesText}>
                  {"\n"}
                  {"\n"}Request Submitted{"\n"}
                </Text>
                <Text style={styles.Text}>
                  One of Our Agent will Contact{"\n"}You Shortly
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSuccessPopup(false);

                  // props.navigation.navigate("TrackBooking", {
                  //   item: data.item,
                  // });
                }}
                style={styles.ViewBookingBtn}
              >
                <Text style={styles.BtnText}>View Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  Wrapper: {
    flex: 1,
    justifyContent: "space-around",
  },
  BtnWrapper: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp("2%"),
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
  SuccessPopup: {
    height: hp("60%"),
    width: wp("80%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    top: hp("20%"),
    padding: hp("2%"),
    justifyContent: "center",
  },
  CongratesText: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    textAlign: "center",
  },
  Text: {
    fontFamily: "UR",
    fontSize: rf(14),
    color: light.textStandard,
    textAlign: "center",
  },
  ImageWraper: {
    height: hp("18%"),
    width: hp("18%"),
    overflow: "hidden",
  },
  ViewBookingBtn: {
    height: hp("7%"),
    width: wp("70%"),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: light.Btn,
    marginTop: hp("4%"),
  },
  BtnText: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(DelieveryAddressDetails);
