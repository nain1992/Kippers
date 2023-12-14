import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
const FeatureCars = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <View style={styles.InnerBody}>
        <Image
          source={props?.Image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("9%"),
    width: wp("40%"),
    backgroundColor: "#1D1138",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  InnerBody: {
    height: "50%",
    width: "50%",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(FeatureCars);
