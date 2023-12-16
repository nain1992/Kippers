import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, StatusBar, Modal } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import DatePicker from "react-native-modern-datepicker";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ForgotHeader from "../../component/ForgotHeader";
import ProfilePicture from "./component/ProfilePicture";
import TextFields from "./component/TextFileds";
import StandardBtn from "../../component/StandardBtn";
import { DetailsHeader } from "../../data/dummydata";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { details } from "../../state-management/actions/auth/users";
import { useNavigation } from "@react-navigation/native";
const YourProfileDetails = (props) => {
  const [fullname, setFullName] = useState("");
  const [nickname, setNickName] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [successpopup, setSuccessPopup] = useState(false);
  const [openClosePicker, setOpenClosePicker] = useState(false);

  const navigation = useNavigation();

  const onsubmit = () => {
    let data = { fullname, nickname, email, phonenumber };

    props?.details(data, navigation);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingScrollView>
        {DetailsHeader.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              onPress={() => props.navigation.goBack()}
            />
          );
        })}
        <ProfilePicture />

        <View style={styles.FieldWrapper}>
          <TextFields
            value={fullname}
            placeholder="Full Name"
            onChangeText={(val) => setFullName(val)}
            multiline
          />
          <TextFields
            value={nickname}
            placeholder="Nickname"
            onChangeText={(val) => setNickName(val)}
            multiline
          />
          <TextFields
            placeholder="Date of Birth"
            value={selectedDate + ""}
            Icon={<MaterialIcons name="cake" size={hp("2%")} color="#9E9E9E" />}
            onPressIn={() => setOpenClosePicker(!openClosePicker)}
            showSoftInputOnFocus={false}
            multiline
          />

          {openClosePicker == true ? (
            <DatePicker
              mode="calendar"
              onSelectedChange={(date) => {
                setSelectedDate(date);
                setOpenClosePicker((prev) => !prev);
              }}
            />
          ) : null}
          <TextFields
            value={email}
            multiline
            placeholder="Email"
            Icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={hp("2%")}
                color="#9E9E9E"
              />
            }
            onChangeText={(val) => setEmail(val)}
          />
          <TextFields
            multiline
            value={phonenumber}
            placeholder="Phone Number"
            onChangeText={(val) => setPhoneNumber(val)}
            keyboardType={"number-pad"}
            Picker
          />
          <TextFields placeholder="Gender" />
        </View>

        <View style={styles.BtnWrapper}>
          <StandardBtn
            Title={"Continue"}
            onPress={onsubmit}
            // onPress={() =>
            //   props.navigation.navigate("Home", { fullname: fullname })
            // }
          />
        </View>
      </KeyboardAvoidingScrollView>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  FieldWrapper: {
    alignItems: "center",
    justifyContent: "space-around",
    height: hp("50%"),
  },
  BtnWrapper: {
    height: hp("15%"),

    justifyContent: "flex-end",
    alignItems: "center",
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
export default connect(mapStateToProps, { details })(YourProfileDetails);
