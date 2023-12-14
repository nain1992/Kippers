import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../../../scheme";

const FAQS = (props) => {
  const [showtext, setShowText] = useState(false);
  const { item } = props;
  return (
    <TouchableOpacity
      onPress={() => setShowText(!showtext)}
      style={styles.container}
    >
      <View style={styles.TitleWrapper}>
        <Text style={styles.TitleText}>{props?.title}</Text>
        <TouchableOpacity>
          <Ionicons name="caret-down" size={hp("2%")} color="#FF1111" />
        </TouchableOpacity>
      </View>
      {showtext == true ? (
        <View style={styles.TextWrapper}>
          <Text style={styles.LoremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. et,
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
    borderRadius: 10,
    backgroundColor: light.bgLight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "space-between",
    paddingVertical: hp("3%"),
    width: wp("90%"),
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
  TitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,

    width: wp("80%"),
    alignSelf: "center",
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
  LoremText: {
    fontFamily: "UR",
    fontSize: rf(13),
    color: "#424242",
  },
  TextWrapper: {
    width: wp("80%"),
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(FAQS);
