import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import ProfilePicture from "./component/ProfilePicture";
import ProfileFields from "./component/ProfileFields";
import BottomTabMenu from "../../component/BottomTabMenu";

const Profile = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props?.theme?.bgLight,
    },

    HeaderWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: wp("5%"),
      height: hp("10%"),
      paddingTop: hp("2%"),
    },
    IconWrapper: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    LableText: {
      fontFamily: "UB",
      fontSize: rf(18),
      color: props?.theme?.textStandard,
      marginLeft: wp("3%"),
    },
    SwitchWrappr: {
      width: wp("100%"),
      paddingHorizontal: wp("5%"),
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    SwitchText: {
      fontFamily: "UR",
      fontSize: rf(11),
      color: props?.theme?.textStandard,
    },
    FieldWrapper: {
      alignItems: "center",
    },
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.HeaderWrapper}>
        <View style={styles.IconWrapper}>
          <Image
            source={require("../../assets/CarVector.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.LableText}>Profile</Text>
      </View>

      <ProfilePicture name={data?.fullname} />
      <View style={styles.FieldWrapper}>
        <ProfileFields
          onPress={() => props.navigation.navigate("EditProfile")}
          Image={require("../../assets/ProfileIcon.png")}
          title="Edit Profile"
          Icon={
            <Ionicons
              name="chevron-forward"
              size={hp("2.5%")}
              color={props?.theme?.textStandard}
            />
          }
        />
        <ProfileFields
          onPress={() => props.navigation.navigate("Address")}
          Image={require("../../assets/LocationIcon.png")}
          title="Address"
          Icon={
            <Ionicons
              name="chevron-forward"
              size={hp("2.5%")}
              color={props?.theme?.textStandard}
            />
          }
        />

        <ProfileFields
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
          Image={require("../../assets/LockIcon.png")}
          title="Privacy Policy"
          Icon={
            <Ionicons
              name="chevron-forward"
              size={hp("2.5%")}
              color={props?.theme?.textStandard}
            />
          }
        />
        <ProfileFields
          onPress={() => props.navigation.navigate("HelpContact")}
          Image={require("../../assets/HelpIcon.png")}
          title="Help & Contact"
          Icon={
            <Ionicons
              name="chevron-forward"
              size={hp("2.5%")}
              color={props?.theme?.textStandard}
            />
          }
        />
        <ProfileFields
          onPress={() => props.navigation.navigate("InviteFriends")}
          Image={require("../../assets/car11.png")}
          title="Share with Friends"
          Icon={
            <Ionicons
              name="chevron-forward"
              size={hp("2.5%")}
              color={props?.theme?.textStandard}
            />
          }
        />
        <ProfileFields
          onPress={() => props.navigation.navigate("Mycars")}
          Image={require("../../assets/LanguageIcon.png")}
          title="My Cars"
          Icon={
            <Ionicons
              name="chevron-forward"
              size={hp("2.5%")}
              color={props?.theme?.textStandard}
            />
          }
        />
        <ProfileFields
          Image={require("../../assets/LogoutIcon.png")}
          title="Logout"
          color={"#F75555"}
        />
      </View>
      <BottomTabMenu activeicon={"Profile"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  users: state.main.new_user,
});
export default connect(mapStateToProps, {})(Profile);
