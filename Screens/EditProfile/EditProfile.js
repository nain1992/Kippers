import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import DatePicker from "react-native-modern-datepicker";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ForgotHeader from "../../component/ForgotHeader";
import TextFields from "./component/TextFileds";
import StandardBtn from "../../component/StandardBtn";
import { EditProfileHeader } from "../../data/dummydata";
import { update } from "../../state-management/actions/auth/users";
import { useNavigation } from "@react-navigation/native";
const EditProfile = (props) => {
  const [fullname, setFullName] = useState("");
  const [nickname, setNickName] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [successpopup, setSuccessPopup] = useState(false);
  const [openClosePicker, setOpenClosePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const navigation = useNavigation();

  // const data = props?.route?.params;

  const onSubmit = () => {
    let data = { fullname };
    props?.update(data, navigation);
  };
  useEffect(() => {
    props?.users;
  }, []);
  let data = props?.users;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingScrollView>
        {EditProfileHeader.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              onPress={() => props.navigation.goBack()}
            />
          );
        })}

        <View style={styles.FieldWrapper}>
          <TextFields
            value={fullname}
            placeholder={data?.fullname ? data?.fullname : fullname}
            onChangeText={(val) => setFullName(val)}
          />
          <TextFields
            value={nickname}
            placeholder="Nickname"
            onChangeText={(val) => setNickName(val)}
          />
          <TextFields
            placeholder="Date of Birth"
            value={selectedDate + ""}
            Icon={<MaterialIcons name="cake" size={hp("2%")} color="black" />}
            onChangeText={(val) => setBirthDate(val)}
            onPressIn={() => setOpenClosePicker(!openClosePicker)}
            showSoftInputOnFocus={false}
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
            placeholder="Email"
            Icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={hp("2%")}
                color="black"
              />
            }
            onChangeText={(val) => setEmail(val)}
          />
          <TextFields
            placeholder="united States"
            Icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={hp("2%")}
                color="black"
              />
            }
            onChangeText={(val) => setEmail(val)}
          />
          <TextFields
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
            Title={"Update"}
            onPress={onSubmit}
            // onPress={() =>
            //   // props.navigation.navigate("Home", { fullname: fullname })
            // }
          />
        </View>
      </KeyboardAvoidingScrollView>
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
    height: hp("65%"),
    marginBottom: hp("8%"),
  },
  BtnWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: hp("12%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  users: state.main.new_user,
});
export default connect(mapStateToProps, { update })(EditProfile);
