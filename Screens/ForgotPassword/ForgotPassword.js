import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  KeyboardAvoidingView,
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
import ConfirmationOption from "./component/ConfirmationOption";
import StandardBtn from "../../component/StandardBtn";
import { ForgotPasswordHEader } from "../../data/dummydata";

const ForgotPassword = (props) => {
  const [picker, setPicker] = useState(1);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      {ForgotPasswordHEader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}

      <View style={styles.PictureWrapper}>
        <View style={styles.PictureBody}>
          <Image
            source={require("../../assets/Frame1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        {/* <Text style={styles.SelectText}>
          Select which contact details should we use to reset your password
        </Text> */}
      </View>
      <View style={styles.WRapper}>
        {/* <ConfirmationOption
          Icon={
            <Ionicons
              name="chatbubble-ellipses"
              size={hp("3%")}
              color="#1D1138"
            />
          }
          Title={"Via SMS"}
          Info={"+1 111 ******99"}
          borderColor={picker == 1 ? "#101010" : "#EEEEEE"}
          onPress={() => setPicker(1)}
        /> */}
        <ConfirmationOption
          Icon={<Ionicons name="mail" size={hp("3%")} color={light.Btn} />}
          Title={"Via Email"}
          Info={"and***ley@yourdomain.com"}
          borderColor={picker == 2 ? light.Btn : "#EEEEEE"}
          // onPress={() => setPicker(!picker)}
        />
      </View>
      <View style={styles.BtnWrapper}>
        <StandardBtn
          Title="Continue"
          onPress={() => props.navigation.navigate("ConfirmCode")}
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
  PictureWrapper: {
    height: hp("42%"),
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    justifyContent: "space-around",
  },
  PictureBody: {
    height: hp("30%"),
    width: wp("90%"),
  },
  SelectText: {
    fontFamily: "UR",
    fontSize: rf(15),
    color: light.textStandard,
  },
  WRapper: {
    height: hp("35%"),
    justifyContent: "space-around",
  },
  BtnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: hp("4%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ForgotPassword);
