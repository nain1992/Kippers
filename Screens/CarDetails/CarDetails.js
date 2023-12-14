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
import Details from "./component/Details";
import RentCar from "./component/RentCar";
import { cardetails, rent, dummydata } from "../../data/dummydata";

const CarDetails = (props) => {
  const [like, setlike] = useState();
  const data = props?.route?.params;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* {console.log(data)} */}
      <StatusBar style="auto" />
      <View style={styles.HeaderBody}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="arrow-back" size={hp("3%")} color="#212121" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setlike(!like)}
          style={styles.HeartBody}
        >
          {like == true ? (
            <Image
              source={require("../../assets/HeartBlack.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../assets/Heart.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
      <View>
        {cardetails.map((item, index) => (
          <Details
            key={index}
            item={item}
            onReviewPress={() => props.navigation.navigate("Reviews")}
            data={data}
          />
        ))}
      </View>
      <View>
        {rent.map((item, index) => {
          return (
            <RentCar
              item={item}
              key={index}
              onMsgPress={() => props?.navigation?.navigate("Inbox")}
              onRentPress={() =>
                props.navigation.navigate("DelieveryAddressDetails", {
                  item: props?.route?.params?.item,
                })
              }
              onPress={() => props.navigation.navigate("Partner")}
              data={data}
            />
          );
        })}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  HeaderBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    height: hp("10%"),
    paddingTop: hp("2%"),
  },
  HeartBody: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(CarDetails);
