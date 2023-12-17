import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { BookingHeader, Chat } from "../../data/dummydata";
import ForgotHeader from "../../component/ForgotHeader";
import { light } from "../../scheme";
import Incoming from "./components/Incoming";
import Outgoing from "./components/Outgoing";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Inbox = (props) => {
  return (
    <View style={styles.container}>
      {Chat.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <KeyboardAvoidingScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <Incoming
              key={index}
              image={require("../../assets/avatar.png")}
              msg={"Welcome to Car2go Customer Service"}
              time={"08:29 am"}
            />
          );
        })}
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <Outgoing
              key={index}
              msg={"Welcome to Car2go Customer Service"}
              time={"Just Now"}
            />
          );
        })}
      </KeyboardAvoidingScrollView>
      <View style={styles.typemsgwrapper}>
        <TouchableOpacity>
          <AntDesign
            name="closecircleo"
            size={hp("2.5%")}
            color="#333333"
            style={{ marginRight: 7 }}
          />
        </TouchableOpacity>
        <View style={styles.typemsgbody}>
          <TextInput
            placeholder="Type here"
            placeholderTextColor={"#D0D0D0"}
            multiline={true}
            style={styles.inputsyles}
          />
          <TouchableOpacity>
            <FontAwesome5 name="smile" size={hp("2.5")} color="#333333" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendbtnbody}>
          <Image
            source={require("../../assets/Send.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  typemsgwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    width: wp("100%"),
    backgroundColor: light.bgLight,
  },
  typemsgbody: {
    height: hp("6%"),
    width: wp("70%"),
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  inputsyles: {
    width: "90%",
    fontFamily: "UR",
    fontSize: rf(11),
    color: "#000000",
  },
  sendbtnbody: {
    height: hp("4%"),
    width: hp("4%"),
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Inbox);
