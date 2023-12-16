import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
const ConfirmationOption = (props) => {
  const [picker, setPicker] = useState(null);
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      style={[
        styles.container,
        {
          borderColor: props.borderColor,
        },
      ]}
    >
      <View style={styles.IconBody}>{props?.Icon}</View>
      <View style={{ paddingHorizontal: wp("3%") }}>
        <Text style={styles.ViaSMS}>{props?.Title}</Text>
        <Text style={styles.InfoText}>{props?.Info}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("12%"),
    width: wp("90%"),
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    padding: hp("2%"),
  },
  IconBody: {
    height: hp("8%"),
    width: hp("8%"),
    borderRadius: 100,
    backgroundColor: "rgba(16, 16, 16, 0.08)",
    justifyContent: "center",
    alignItems: "center",
  },
  ViaSMS: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#757575",
  },
  InfoText: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: "#000000",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ConfirmationOption);
