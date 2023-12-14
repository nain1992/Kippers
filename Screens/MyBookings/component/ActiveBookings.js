import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const ActiveBookings = (props) => {
  const { item } = props;
  // const [Active, setActive] = useState(true);
  return (
    <>
      {/* {Active == true ? (
        <View style={styles.container}>
          <View style={styles.NoBookingWrapper}>
            <Image
              source={require("../../../assets/NoBooking.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
      ) : ( */}
      <View style={styles.ActiveBookingWrapper}>
        <View style={styles.ImageBody}>
          <Image
            source={item?.Image}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            paddingLeft: 10,
          }}
        >
          <Text style={styles.TitleText}>{item?.Title}</Text>
          <View style={styles.ColorWrapper}>
            <View
              style={[
                styles.ColorDot,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
            ></View>
            <Text style={styles.ColorName}>{item?.carcolor}</Text>
            <View style={styles.DelieveryBody}>
              <Text style={styles.DelieverText}>{item?.Delievery}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.PriceText}>{item?.price}</Text>
            {/* <TouchableOpacity onPress={props?.onPress} style={styles.TrackBtn}>
              <Text style={styles.TrackText}>{item?.btntexts}</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      {/* )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  NoBookingWrapper: {
    height: hp("50%"),
    width: wp("100%"),
  },
  ActiveBookingWrapper: {
    height: hp("18%"),
    width: wp("90%"),
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    alignSelf: "center",
    marginVertical: hp("1.5%"),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
  },
  ImageBody: {
    height: hp("14"),
    width: wp("33%"),
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    overflow: "hidden",
  },
  ColorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  ColorDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "#E7E7E7",
  },
  TitleText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
  ColorName: {
    fontFamily: "UR",
    fontSize: rf(10),
    color: "#616161",
    marginHorizontal: 5,
  },
  DelieveryBody: {
    height: hp("3.5%"),
    width: wp("14%"),
    backgroundColor: "#10101014",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  DelieverText: {
    fontFamily: "UR",
    fontSize: rf(8),
    color: "#35383F",
  },
  PriceText: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: light.textStandard,
    marginRight: 15,
  },
  TrackBtn: {
    height: hp("4%"),
    width: wp("30%"),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1138",
  },
  TrackText: {
    fontFamily: "UB",
    fontSize: rf(10),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ActiveBookings);
