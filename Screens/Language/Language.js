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
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import { LanguageHeader } from "../../data/dummydata";

const Language = (props) => {
  const [englishLanguage, setEnglishLanguage] = useState(true);
  const [arabicLanguage, setArabicLanguage] = useState();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />

      {LanguageHeader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <View style={styles.MainWrapper}>
        <View style={styles.LanguageWrapper}>
          <Text style={styles.Text}>English</Text>
          <TouchableOpacity
            onPress={() => {
              setEnglishLanguage(true);
              setArabicLanguage(false);
            }}
            style={styles.SelectorView}
          >
            {englishLanguage == true ? (
              <View style={styles.SelectorIcon}></View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.LanguageWrapper}>
          <Text style={styles.Text}>Arabic</Text>
          <TouchableOpacity
            onPress={() => {
              setArabicLanguage(true);
              setEnglishLanguage(false);
            }}
            style={styles.SelectorView}
          >
            {arabicLanguage == true ? (
              <View style={styles.SelectorIcon}></View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  LanguageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    justifyContent: "space-between",
  },
  SelectorView: {
    height: 18,
    width: 18,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: light.textStandard,
  },
  Text: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
  SelectorIcon: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: light.textStandard,
  },
  MainWrapper: {
    height: hp("15%"),
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Language);
