import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Modal,
  Switch,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const ProfileFields = (props) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container}>
      <View style={styles.IconBody}>
        <Image
          source={props?.Image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
          paddingRight: 10,
        }}
      >
        <Text
          style={[
            styles.Title,
            {
              color: props?.color,
            },
          ]}
        >
          {props?.title}
        </Text>
        <Text style={styles.Title}>{props?.titletwo}</Text>
      </View>
      {props?.Icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp("1.5%"),
  },
  IconBody: {
    height: 20,
    width: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  Title: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ProfileFields);
