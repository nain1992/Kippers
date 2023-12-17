import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../scheme";

const FeatureCars = (props) => {
  const [like, setLike] = useState(true);
  const { item } = props;
  return (
    <Pressable onPress={props?.onPress} style={{ marginVertical: hp("2%") }}>
      <View style={styles.BodyWRapper}>
        <Pressable onPress={() => setLike(!like)} style={styles.FavourateIcon}>
          {like == true ? (
            <Image
              source={require("../../assets/Heart.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../assets/HeartBlack.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          )}
        </Pressable>
        <View style={styles.CarWrappr}>
          <Image
            source={item?.Image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles.TitleText}>{item?.Title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: hp("1%"),
        }}
      >
        <View style={styles.StarView}>
          <Image
            source={require("../../assets/Star.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.RattingText}>{item?.ratting} |</Text>
        <TouchableOpacity style={styles.NewBtnBody}>
          <Text style={styles.NEwText}>{item?.new}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.PriceWrapper}>
        <Text style={styles.DiscountedPRice}>{item?.disprice}</Text>
        <Text
          style={[
            styles.DiscountedPRice,
            {
              fontFamily: "UR",
              fontSize: rf(10),
              textDecorationLine: "line-through",
            },
          ]}
        >
          {item?.price}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  BodyWRapper: {
    height: hp("18%"),
    width: wp("42%"),
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    padding: hp("2%"),
  },
  FavourateIcon: {
    height: 15,
    width: 15,
    alignSelf: "flex-end",
  },
  CarWrappr: {
    height: "100%",
    width: "100%",
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
    marginVertical: hp("1%"),
  },
  StarView: {
    height: 20,
    width: 20,
  },
  RattingText: {
    fontFamily: "UR",
    fontSize: rf(11),
    color: "#616161",
    marginHorizontal: 10,
  },
  NewBtnBody: {
    height: hp("3.5%"),
    width: wp("12%"),
    backgroundColor: "rgba(16, 16, 16, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 5,
  },
  NEwText: {
    fontFamily: "UR",
    fontSize: rf(10),
    color: "#35383F",
  },
  PriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  DiscountedPRice: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: light.textStandard,
    marginTop: 5,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(FeatureCars);
