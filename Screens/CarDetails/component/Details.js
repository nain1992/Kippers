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
import { dark, light } from "../../../scheme";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { cardetails, ScrollCars } from "../../../data/dummydata";

const CarDetails = (props) => {
  const { item, data } = props;
  // let arr = [
  //   {
  //     img: require("../../../assets/CarView.png"),
  //   },
  //   {
  //     img: require("../../../assets/black.png"),
  //   },
  //   {
  //     img: require("../../../assets/red.png"),
  //   },
  //   {
  //     img: require("../../../assets/white.png"),
  //   },
  //   {
  //     img: require("../../../assets/white.png"),
  //   },
  // ];

  // const data = props?.route?.params;

  return (
    <View>
      <View>
        <View style={styles.ImgWrapper}>
          <Image
            source={data?.item?.Image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.CarImgScrollViewWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {ScrollCars.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.ScrollCarImage}>
                  <Image
                    source={item?.img}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.TitleWrapper}>
          <Text style={styles.TextTitle}>{data?.item?.Title}</Text>
          <View style={styles.InnerWrapper}>
            <View style={styles.NewBody}>
              <Text style={styles.NewText}>{item?.NewText}</Text>
            </View>
            <View style={styles.StarBody}>
              <Image
                source={require("../../../assets/Star.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity onPress={props?.onReviewPress}>
              <Text style={styles.ReviewText}>{item?.reviews}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.DescriptionTitle}>{item?.description}</Text>
          <View>
            <Text style={styles.Lable}>{item?.distext}</Text>
          </View>
        </View>
        <View style={styles.InsuranceWrapper}>
          <View>
            <Text style={styles.DepositText}>{item?.deposit}</Text>
            <Text style={styles.DepositPriceText}>{item?.depositmoney}</Text>
          </View>
          <View style={styles.BorderView}></View>
          <View>
            <Text style={styles.DepositText}>{item?.kmtext}</Text>
            <Text style={styles.DepositPriceText}>{item?.kms}</Text>
          </View>
          <View style={styles.BorderView}></View>
          <View>
            <Text style={styles.DepositText}>{item?.insurance}</Text>
            <Text style={styles.DepositPriceText}>{item?.insured}</Text>
          </View>
          <View style={styles.BorderView}></View>
          <View>
            <Text style={styles.DepositText}>{item?.transmission}</Text>
            <Text style={styles.DepositPriceText}>{item?.included}</Text>
          </View>
        </View>
        <View style={styles.TermsConditionWrapper}>
          <Text style={styles.TermText}>
            {item?.terms}
            <Text style={styles.TermsDes}>{item?.termsconditions}</Text>
          </Text>
        </View>
      </View>
      {/* );
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  ImgWrapper: {
    height: hp("20%"),
    width: wp("90%"),
    alignSelf: "center",
  },
  CarImgScrollViewWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ScrollCarImage: {
    height: hp("10%"),
    width: hp("10%"),
    overflow: "hidden",
    borderRadius: 10,
    marginLeft: wp("5%"),
  },
  TextTitle: {
    fontFamily: "UB",
    fontSize: rf(25),
    color: light.textStandard,
  },
  TitleWrapper: {
    paddingLeft: wp("5%"),
    minHeight: hp("20%"),
    justifyContent: "space-evenly",
  },
  InnerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  NewBody: {
    height: hp("3%"),
    width: wp("10%"),
    backgroundColor: "#CE171F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  NewText: {
    fontFamily: "UR",
    fontSize: rf(9),
    color: "#fff",
  },
  StarBody: {
    height: 20,
    width: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  ReviewText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#424242",
  },
  DescriptionBody: {},
  DescriptionTitle: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
    marginBottom: 5,
  },
  Lable: {
    fontFamily: "UR",
    fontSize: rf(13),
    color: light.textStandard,
  },
  InsuranceWrapper: {
    height: hp("8%"),
    width: wp("90%"),
    alignSelf: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: hp("2%"),
    paddingHorizontal: wp("2%"),
  },
  DepositText: {
    fontFamily: "UR",
    fontSize: rf(10),
    color: "#404040",
    textAlign: "center",
  },
  DepositPriceText: {
    fontFamily: "UB",
    fontSize: rf(12),
    color: "#000000",
    textAlign: "center",
  },
  BorderView: {
    width: 0,
    height: "50%",
    borderColor: "#DBDBDB",
    borderWidth: 1,
  },
  TermsConditionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  TermText: {
    fontFamily: "UB",
    color: "#424242",
    fontSize: rf(13),
    textAlign: "center",
  },
  TermsDes: {
    fontFamily: "UR",
    color: "#424242",
    fontSize: rf(13),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(CarDetails);
