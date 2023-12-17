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
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../../scheme";
import { AntDesign } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { data, Offers } from "../../data/dummydata";

// const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;

const SpecialOffer = (props) => {
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
    <View onPress={props?.onPress} style={styles.MainWrapper}>
      <ScrollView
        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
      >
        {Offers.map((item, index) => {
          return (
            <ImageBackground
              key={index}
              style={styles.container}
              source={item?.Image}
              resizeMode="contain"
            >
              <Pressable onPress={props.onPress}>
                <View style={styles.TextWrapper}>
                  <Text style={styles.NumText}>{item?.percent}</Text>
                  <Text style={styles.WeekText}>{item?.deals}</Text>
                  <Text
                    style={[
                      styles.WeekText,
                      {
                        fontSize: rf(12),
                        fontFamily: "UB",
                        color: "#fff",
                      },
                    ]}
                  >
                    {item?.dics}
                  </Text>
                </View>
                {/* <View style={styles.TextWrapper}>
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
              </View> */}
                {/* <Pressable onPress={props.onPress} style={styles.ImageWrapper}>
                <Image
                  source={item?.Image}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                />
              </Pressable> */}
              </Pressable>
            </ImageBackground>
          );
        })}
      </ScrollView>
      <View style={styles.WrapDot}>
        {Offers.map((item, index) => (
          <View
            key={index}
            style={imgActive == index ? styles.dotActive : styles.dot}
          ></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("22%"),
    backgroundColor: "#BDBDBD",
    borderRadius: 15,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: wp("2%"),
    marginVertical: hp("1%"),
  },

  NumText: {
    fontFamily: "UB",
    fontSize: rf(30),
    color: "#fff",
  },
  WeekText: {
    fontFamily: "UB",
    fontSize: rf(16),
    color: "#fff",
  },
  TextWrapper: {
    justifyContent: "space-around",
    paddingLeft: wp("5%"),
    height: "100%",
    paddingVertical: hp("3%"),
  },
  ImageWrapper: {
    height: "100%",
    width: "100%",
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
    backgroundColor: "#222",
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
export default connect(mapStateToProps)(SpecialOffer);
