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
import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import GetCode from "./component/GetCode";
import StandardBtn from "../../component/StandardBtn";
import { ForgotPasswordHEader } from "../../data/dummydata";

const ConfirmCode = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {ForgotPasswordHEader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <StatusBar style="auto" />

      <View style={{ height: hp("70%"), justifyContent: "center" }}>
        <View style={styles.Wrapper}>
          <View>
            <Text style={styles.TextCode}>
              Code has been send to +1 111 ******99
            </Text>
          </View>
          <GetCode />
          <View>
            <Text style={styles.TextCode}>Resend code in 53 s</Text>
          </View>
        </View>
      </View>
      <View style={styles.BtnWRapper}>
        <StandardBtn
          Title="Verify"
          onPress={() => props.navigation.navigate("Home")}
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
    height: hp("30%"),
    justifyContent: "space-around",
  },
  TextCode: {
    fontFamily: "UR",
    fontSize: rf(14),
    color: "#212121",
    textAlign: "center",
  },
  BtnWRapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: hp("4%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ConfirmCode);
