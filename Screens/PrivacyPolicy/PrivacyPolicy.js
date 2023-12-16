import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import { PRivacyHEader } from "../../data/dummydata";

const PrivacyPolicy = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />

      {PRivacyHEader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <ScrollView>
        <View style={styles.Wrapper}>
          <Text style={styles.Heading}>1. Types of Data We Collect{"\n"}</Text>
          <Text style={styles.DecText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{"\n"}
          </Text>
          <Text style={styles.Heading}>2. Use of Your Personal Data{"\n"}</Text>
          <Text style={styles.DecText}>
            Magna etiam tempor orci eu lobortis elementum nibh. Vulputate enim
            nulla aliquet porttitor lacus. Orci sagittis eu volutpat odio. Cras
            semper auctor neque vitae tempus quam pellentesque nec. Non quam
            lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
            Commodo elit at imperdiet dui. Nisi vitae suscipit tellus mauris a
            diam. Erat pellentesque adipiscing commodo elit at imperdiet dui. Mi
            ipsum faucibus vitae aliquet nec ullamcorper. Pellentesque pulvinar
            pellentesque habitant morbi tristique senectus et.{"\n"}
          </Text>
          <Text style={styles.Heading}>
            3. Disclosure of Your Personal Data{"\n"}
          </Text>
          <Text style={styles.DecText}>
            Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet
            bibendum enim facilisis gravida neque. Nibh tellus molestie nunc non
            blandit massa. Quam pellentesque nec nam aliquam sem et tortor
            consequat id. Faucibus vitae aliquet nec ullamcorper sit amet risus.
            Nunc consequat interdum varius sit amet. Eget magna fermentum
            iaculis eu non diam phasellus vestibulum. Pulvinar pellentesque
            habitant morbi tristique senectus et. Lorem donec massa sapien
            faucibus et molestie. Massa tempor nec feugiat nisl pretium fusce
            id. Lacinia at quis risus sed vulputate odio. Integer vitae justo
            eget magna fermentum iaculis. Eget gravida cum sociis natoque
            penatibus et magnis.{"\n"}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  Wrapper: {
    paddingHorizontal: wp("5%"),
    marginTop: hp("3%"),
  },
  Heading: {
    fontFamily: "UB",
    fontSize: rf(17),
    color: light.textStandard,
  },
  DecText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#424242",
    textAlign: "justify",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(PrivacyPolicy);
