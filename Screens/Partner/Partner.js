import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import { light } from "../../scheme";
import { toprated, Partnerr } from "../../data/dummydata";
import FeaturedCars from "../component/FeaturedCars";
import TrustedComponent from "./component/TrustedComponent";

const Partner = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {Partnerr.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              onPress={() => props.navigation.goBack()}
            />
          );
        })}
        <View style={styles.TrustedWrapper}>
          <TrustedComponent />
        </View>

        <View style={styles.FeaturedCadWrapper}>
          {toprated.map((item, index) => {
            return (
              <FeaturedCars
                item={item}
                key={index}
                onPress={() =>
                  props.navigation.navigate("CarDetails", { item })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  Wrapper: {
    paddingLeft: wp("5%"),
    flexDirection: "row",
    height: hp("10%"),
    alignItems: "center",
  },
  FeaturedCadWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  TrustedWrapper: {
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Partner);
