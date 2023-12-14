import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import PasswordField from "./component/PasswordField";
import StandardBtn from "../../component/StandardBtn";
import { CreatePassHeader } from "../../data/dummydata";

const CreatePassword = (props) => {
  const [remembertoggle, setRememberToggle] = useState(false);
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [successpopup, setSuccessPopup] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={{ marginBottom: hp("6%") }}>
          {CreatePassHeader.map((item, index) => {
            return (
              <ForgotHeader
                item={item}
                key={index}
                onPress={() => props.navigation.goBack()}
              />
            );
          })}
          <StatusBar style="auto" />

          <View style={styles.ImageWrapper}>
            <Image
              source={require("../../assets/CreatePasswordImage.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.TextWrapper}>
            <Text style={styles.CreateText}>Create Your New Password</Text>
          </View>
          <View style={styles.Wrapper}>
            <PasswordField
              placeholder={"●●●●●●●●●●●●"}
              onChangeText={(val) => setNewPassword(val)}
            />
            <PasswordField
              placeholder={"●●●●●●●●●●●●"}
              onChangeText={(val) => setConfirmPassword(val)}
            />
          </View>

          <View style={styles.RememberWrapper}>
            <TouchableOpacity
              onPress={() => setRememberToggle(!remembertoggle)}
              style={styles.CheckBoxBody}
            >
              {remembertoggle == true ? (
                <MaterialIcons name="done" size={hp("1.8%")} color="#fff" />
              ) : null}
            </TouchableOpacity>
            <Text style={styles.RememberText}>Remember me</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.BtnWrapper}>
        <StandardBtn
          Title="Continue"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
      {successpopup == true ? (
        <Modal transparent={true}>
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
                  {"\n"}Congratulations!{"\n"}
                </Text>
                <Text style={styles.Text}>
                  Your account is ready to use. You will be redirected to the
                  Home page in a few seconds..
                </Text>
              </View>
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
  ImageWrapper: {
    height: hp("30%"),
    width: wp("90%"),
    alignSelf: "center",
    marginVertical: hp("5%"),
  },
  CreateText: {
    fontFamily: "UR",
    fontSize: rf(15),
    color: "#212121",
  },
  TextWrapper: {
    paddingHorizontal: wp("5%"),
  },
  Wrapper: {
    alignItems: "center",
    height: hp("20%"),
    justifyContent: "space-around",
  },
  RememberWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("2%"),
  },
  CheckBoxBody: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: "#1D1138",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  RememberText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: light.textStandard,
  },
  BtnWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: hp("4%"),
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
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(CreatePassword);
