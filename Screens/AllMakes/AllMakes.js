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
import { dark, light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import CarSponsers from "./component/CarSponsers";
import ForgotHeader from "../../component/ForgotHeader";

const AllMakes = (props) => {
  return (
    <View style={styles.sponsersWrapper}>
      <ForgotHeader
        Title="All Makes"
        SearchICon
        onPress={() => props.navigation.goBack()}
      />
      <View style={styles.MakesWrapper}>
        <CarSponsers
          Title="Mersedies"
          Img={require("../../assets/Mersedies.png")}
        />
        <CarSponsers Img={require("../../assets/Tesla.png")} Title="Tesla" />
        <CarSponsers Img={require("../../assets/BMW.png")} Title="BMW" />
        <CarSponsers Img={require("../../assets/Toyota.png")} Title="Toyota" />
        <CarSponsers Img={require("../../assets/Volvo.png")} Title="Volvo" />
        <CarSponsers Img={require("../../assets/Bugati.png")} Title="Bugatti" />
        <CarSponsers Img={require("../../assets/Honda.png")} Title="Honda" />
        <CarSponsers
          Title="Mersedies"
          Img={require("../../assets/Mersedies.png")}
        />
        <CarSponsers Img={require("../../assets/Tesla.png")} Title="Tesla" />
        <CarSponsers Img={require("../../assets/BMW.png")} Title="BMW" />
        <CarSponsers Img={require("../../assets/Toyota.png")} Title="Toyota" />
        <CarSponsers Img={require("../../assets/Volvo.png")} Title="Volvo" />
        <CarSponsers Img={require("../../assets/Bugati.png")} Title="Bugatti" />
        <CarSponsers Img={require("../../assets/Honda.png")} Title="Honda" />
        <CarSponsers
          Title="Mersedies"
          Img={require("../../assets/Mersedies.png")}
        />
        <CarSponsers Img={require("../../assets/Tesla.png")} Title="Tesla" />
        <CarSponsers Img={require("../../assets/BMW.png")} Title="BMW" />
        <CarSponsers Img={require("../../assets/Toyota.png")} Title="Toyota" />
        <CarSponsers Img={require("../../assets/Volvo.png")} Title="Volvo" />
        <CarSponsers Img={require("../../assets/Bugati.png")} Title="Bugatti" />
        <CarSponsers Img={require("../../assets/Honda.png")} Title="Honda" />
        <CarSponsers
          Title="Mersedies"
          Img={require("../../assets/Mersedies.png")}
        />
        <CarSponsers Img={require("../../assets/Tesla.png")} Title="Tesla" />
        <CarSponsers Img={require("../../assets/BMW.png")} Title="BMW" />
        <CarSponsers Img={require("../../assets/Toyota.png")} Title="Toyota" />
        <CarSponsers Img={require("../../assets/Volvo.png")} Title="Volvo" />
        <CarSponsers Img={require("../../assets/Bugati.png")} Title="Bugatti" />
        <CarSponsers Img={require("../../assets/Honda.png")} Title="Honda" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  MakesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(AllMakes);
