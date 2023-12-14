import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../scheme";
import ForgotHeader from "../../component/ForgotHeader";
import { mywatchlist, Wishlist } from "../../data/dummydata";
import FeaturedCars from "../component/FeaturedCars";

const MyWatchList = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={{ marginBottom: hp("0%") }}>
          {Wishlist.map((item, index) => {
            return (
              <ForgotHeader
                item={item}
                key={index}
                onPress={() => props.navigation.goBack()}
              />
            );
          })}
          <View style={styles.FeaturedCadWrapper}>
            {mywatchlist.map((item, index) => {
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
  FeaturedCadWrapper: {
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(MyWatchList);
