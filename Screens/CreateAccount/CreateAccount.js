import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
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

const CreateAccount = (props) => {
  const [Remember, setRemember] = useState(false);
  const [Border, setBorder] = useState(0);
  const [secondBorder, setsetSecondBorder] = useState(0);
  const [showpassword, setshowpassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignup = () => {
    if (email !== "" || password !== "") {
    } else {
      alert("Fill All Details");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo onPress={() => props.navigation.goBack()} />
      <Text style={styles.TitleText}>Create Your Account</Text>
      <View style={styles.FieldWrapper}>
        <TextFields
          onChangeText={(val) => setEmail(val)}
          Icon={<MaterialIcons name="email" size={hp("2%")} color="#212121" />}
          placeholder={"Email"}
          borderWidth={Border ? 1 : 0}
          onPress={() => {
            setBorder(1), setsetSecondBorder(0);
          }}
        />
        <TextFields
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
          Title={"Sign up"}
          onPress={() => props.navigation.navigate("YourProfileDetails")}
          // onPress={onSignup}
        />
      </View>
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
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text style={styles.SignText}> Sign in</Text>
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
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(24),
    color: light.textStandard,
    textAlign: "center",
    marginTop: 10,
  },
  TitleTextWrapper: {
    alignItems: "center",
    height: hp("10%"),
    justifyContent: "center",
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
    borderRadius: 5,
    borderColor: light.Btn,
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
    height: hp("8%"),
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
    marginTop: hp("4%"),
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
    paddingHorizontal: wp("10%"),
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(CreateAccount);
