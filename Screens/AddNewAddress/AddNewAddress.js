import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import MapView from "react-native-maps";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import AddressPopup from "./component/AddressPopup";
import { AddAddress } from "../../data/dummydata";
import StandardBtn from "../../component/StandardBtn";

const AddNewAddress = (props) => {
  const [popup, setPopup] = useState(true);
  const [checkbox, setCheckBox] = useState();

  return (
    <>
      <View
        style={styles.container}
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <KeyboardAvoidingScrollView showsVerticalScrollIndicator={false}>
          <StatusBar style="auto" />

          {AddAddress.map((item, index) => {
            return (
              <ForgotHeader
                item={item}
                key={index}
                onPress={() => props.navigation.goBack()}
              />
            );
          })}
          <View style={styles.mapcontainer}>
            <MapView style={styles.map} />
          </View>

          {/* <View style={styles.detailcontainer}>
          <Text style={styles.AddressText}>Address Details</Text>
          <View style={styles.BorderView}></View>
          <Text style={styles.AddressNameText}> Name Address</Text>
          <View style={styles.AddressInputView}>
            <TextInput style={styles.TextIput} placeholder="Home" />
          </View>
          <Text style={styles.AddressNameText}>Address Details</Text>
          <View style={styles.AddressInputView}>
            <TextInput
              style={styles.TextIput}
              placeholder="2899 Summer Drive Taylor, PC 48180"
            />
            <Entypo name="location-pin" size={hp("2%")} color="black" />
          </View>
          <View style={styles.DefualTAdressWrapper}>
            <TouchableOpacity
              onPress={() => setCheckBox(!checkbox)}
              style={styles.CheckBoxBody}
            >
              {checkbox == true ? (
                <MaterialIcons name="done" size={hp("2%")} color="black" />
              ) : null}
            </TouchableOpacity>
            <Text style={styles.DefualtText}>
              Make this as the default address
            </Text>
          </View>
          <View style={styles.BtnWrapper}>
            <StandardBtn
              Title="Add"
              onPress={() => navigation.navigate("Address")}
            />
          </View>
        </View> */}
          <View>{popup && <AddressPopup />}</View>
        </KeyboardAvoidingScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  mapcontainer: {
    height: hp("100%"),
    width: wp("100%"),
  },
  map: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    flex: 1,
  },
  detailcontainer: {
    height: hp("40%"),
    width: wp("100%"),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: hp("3%"),
    zIndex: 9999,
    backgroundColor: "#fff",
  },
  AddressText: {
    textAlign: "center",
    fontFamily: "UB",
    fontSize: rf(16),
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
    height: "100%",
    width: "90%",
    fontFamily: "UB",
    fontSize: rf(13),
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
    justifyContent: "center",
    alignItems: "center",
  },
  DefualtText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: light.textStandard,
    marginLeft: 10,
  },
  BtnWrapper: {
    marginVertical: hp("2%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(AddNewAddress);
