import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../../scheme";
import { AntDesign } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { data, Offers } from "../../../data/dummydata";

// const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;

const DiscountOffers = (props) => {
  const { item } = props;
  const [imgActive, setimgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.TextWrapper}>
        <Text style={styles.NumText}>{item?.percent}</Text>
        <Text style={styles.WeekText}>{item?.deals}</Text>
        <Text
          style={[
            styles.WeekText,
            {
              fontSize: rf(11),
              fontFamily: "UR",
            },
          ]}
        >
          {item?.dics}
        </Text>
      </View>
      <View style={styles.ImageWrapper}>
        <Image
          source={item?.Image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("22%"),
    backgroundColor: "#E7E7E7",
    borderRadius: 15,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: wp("2%"),
    marginVertical: hp("0.6%"),
  },

  NumText: {
    fontFamily: "UB",
    fontSize: rf(25),
    color: light.LableText,
  },
  WeekText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.LableText,
  },
  TextWrapper: {
    width: "40%",
    justifyContent: "space-around",
    paddingLeft: wp("5%"),
    height: "100%",
    paddingVertical: 20,
  },
  ImageWrapper: {
    height: "100%",
    width: "60%",
    overflow: "hidden",
  },
  MainWrapper: {
    height: hp("22%"),
    width: wp("90%"),
    alignSelf: "center",
    flexDirection: "row",
  },
  WrapDot: {
    position: "absolute",
    top: hp("19%"),
    left: wp("40%"),
    flexDirection: "row",
    alignItems: "center",

    zIndex: 999,
  },
  dotActive: {
    height: 5,
    width: 10,
    backgroundColor: "#101010",
    margin: 3,
    borderRadius: 10,
  },
  dot: {
    height: 5,
    width: 5,
    backgroundColor: "#BDBDBD",
    margin: 3,
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(DiscountOffers);
