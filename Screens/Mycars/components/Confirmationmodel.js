import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Confirmationmodel = (props) => {
  const { item } = props;
  return (
    <Modal transparent={true} animationType="fade">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <Text style={styles.titletext}>Are you sure you want to delete?</Text>
        <View style={styles.btnwrapper}>
          <TouchableOpacity
            onPress={props?.oncancelPress}
            style={styles.cancelbtn}
          >
            <Text style={styles.btntext}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props?.onOkPress} style={styles.okbtn}>
            <Text style={styles.oktext}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("30%"),
    width: wp("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: hp("2%"),
    position: "absolute",
    alignSelf: "center",
    bottom: hp("35%"),
    alignItems: "center",
    justifyContent: "space-around",
  },
  titletext: {
    fontFamily: "UB",
    fontSize: rf(16),
    color: "#000000",
  },
  cancelbtn: {
    height: hp("6%"),
    width: wp("38%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  btnwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  btntext: {
    fontFamily: "UR",
    fontSize: rf(14),
    color: "#000000",
  },
  okbtn: {
    height: hp("6%"),
    width: wp("38%"),
    borderRadius: 100,
    backgroundColor: "#FF1111",
    justifyContent: "center",
    alignItems: "center",
  },
  oktext: {
    fontFamily: "UR",
    fontSize: rf(14),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Confirmationmodel);
