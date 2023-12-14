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
  const [item, setItem] = useState();
  useEffect(() => {
    if (props?.route?.params?.item) {
      setItem(props?.route?.params?.item);
    } else if (props?.item) {
      setItem(props?.item);
    }

    return () => {
      setItem();
    };
  }, [props]);

  return (
    <>
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
            height: "55%",
            justifyContent: "space-between",
            paddingLeft: 10,
          }}
        >
          <Text style={styles.TitleText}>{item?.Title}</Text>
          <Text style={styles.MonthlyRentalText}>Monthly Rental</Text>
          <Text style={styles.PriceText}>{item?.price}</Text>
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
    borderRadius: 10,
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
    paddingHorizontal: wp("4%"),
  },
  ImageBody: {
    height: hp("14"),
    width: wp("33%"),
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    overflow: "hidden",
  },

  TitleText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
  },
  MonthlyRentalText: {
    fontFamily: "UR",
    fontSize: rf(11),
    color: "#616161",
  },

  PriceText: {
    fontFamily: "UB",
    fontSize: rf(15),
    color: light.textStandard,
    marginRight: 15,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ActiveBookings);
