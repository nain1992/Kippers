import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import SpecialOffer from "../component/SpecialOffer";
import { OfferHeader, OffersSpecial } from "../../data/dummydata";
import { light } from "../../scheme";
import DiscountOffers from "./component/DiscountOffers";

const Offers = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {OfferHeader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <View>
        <ScrollView style={{ marginBottom: hp("10%") }}>
          {OffersSpecial.map((item, index) => {
            return (
              <DiscountOffers
                onPress={() => props.navigation.navigate("TopRated")}
                item={item}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Offers);
