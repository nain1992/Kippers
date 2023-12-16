import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";

import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Logo from "../../component/Logo";
import TextFields from "./component/TextFields";
import StandardBtn from "../../component/StandardBtn";
import LinkAccount from "./component/LinkAccount";

const Login = (props) => {
  const [Remember, setRemember] = useState(false);
  const [Border, setBorder] = useState(0);
  const [secondBorder, setsetSecondBorder] = useState(0);
  const [showpassword, setshowpassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignin = () => {
    if (email !== "" || password !== "") {
    } else {
      alert("Fill All Details");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />

      <Logo onPress={() => props.navigation.goBack()} />

      <Text style={styles.TitleText}>Login to your Account</Text>

      <View style={styles.FieldWrapper}>
        <TextFields
          multiline
          onChangeText={(val) => setEmail(val)}
          Icon={<MaterialIcons name="email" size={hp("2%")} color="#212121" />}
          placeholder={"Email"}
          borderWidth={Border ? 1 : 0}
          onPress={() => {
            setBorder(1), setsetSecondBorder(0);
          }}
        />
        <TextFields
          multiline
          onChangeText={(val) => setPassword(val)}
          Icon={<MaterialIcons name="lock" size={hp("2%")} color="#212121" />}
          Eye={
            showpassword ? (
              <Entypo name="eye" size={hp("2.5%")} color="#212121" />
            ) : (
              <Entypo name="eye-with-line" size={hp("2.5%")} color="#212121" />
            )
          }
          placeholder={"Password"}
          secureTextEntry={showpassword ? false : true}
          borderWidth={secondBorder ? 1 : 0}
          onPress={() => {
            setBorder(0), setsetSecondBorder(1);
          }}
          onEyePress={() => setshowpassword(!showpassword)}
        />
        <View style={styles.RemeberWrapper}>
          <TouchableOpacity
            onPress={() => setRemember(!Remember)}
            style={styles.CheckBoxBody}
          >
            {Remember == true ? (
              <Entypo name="check" size={rf(12)} color={light.Btn} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.RemeberText}>Remember me</Text>
        </View>
      </View>
      <View style={styles.BtnWrapper}>
        <StandardBtn
          Title={"Sign in"}
          onPress={() => props.navigation.navigate("Home")}
          // onPress={onSignin}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ForgotPassword")}
        style={styles.ForgotTextWrapper}
      >
        <Text style={styles.ForgotText}>Forgot the login details?</Text>
      </TouchableOpacity>
      <View style={styles.OrWrapper}>
        <View style={styles.BorderView}></View>
        <Text style={styles.OrText}>or continue with</Text>
        <View style={styles.BorderView}></View>
      </View>

      <View style={styles.LinkedAccountWrapper}>
        <LinkAccount Image={require("../../assets/Fbb.png")} />
        <LinkAccount Image={require("../../assets/Google.png")} />
        <LinkAccount Image={require("../../assets/Apple.png")} />
      </View>
      <View style={styles.SignuTextWrapper}>
        <Text style={styles.DontText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CreateAccount")}
        >
          <Text style={styles.SignText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(24),
    color: light.textStandard,
    textAlign: "center",
    marginTop: 10,
  },

  FieldWrapper: {
    alignItems: "center",
    height: hp("25%"),
    justifyContent: "space-around",
  },
  RemeberWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  CheckBoxBody: {
    height: hp("2.5%"),
    width: hp("2.5%"),
    borderWidth: 2,
    borderColor: light.Btn,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  RemeberText: {
    fontFamily: "UB",
    fontSize: rf(12),
    color: light.textStandard,
  },
  BtnWrapper: {
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  Wrapper: {
    alignItems: "center",
    height: hp("25%"),
    justifyContent: "space-between",
    marginTop: hp("3%"),
  },
  OrWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    alignSelf: "center",
    flex: 1,
  },
  BorderView: {
    flex: 1,
    borderColor: "#EEEEEE",
    borderWidth: 1,
  },
  OrText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: "#616161",
    marginHorizontal: wp("5%"),
  },
  SignuTextWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    marginBottom: 10,
  },
  DontText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#9E9E9E",
  },
  SignText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: light.Btn,
  },
  LinkedAccountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: wp("8%"),
    marginVertical: hp("1%"),
  },
  ForgotText: {
    fontFamily: "UR",
    fontSize: rf(13),
    color: light.Btn,
  },
  ForgotTextWrapper: {
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Login);
