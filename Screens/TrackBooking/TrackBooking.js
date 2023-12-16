import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
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
import ActiveBookings from "./component/ActiveBookings";

import { Track, BookingTrack, PopupActtive } from "../../data/dummydata";
import CarInDelievery from "./component/CarInDelievery";
import ORderStatusDetails from "./component/ORderStatusDetails";

const TrackBooking = (props) => {
  const data = props?.route?.params;

  const [currentorderstatus, setCurrentOrderStatus] = useState(
    "Prepairing Your Vehicle"
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {BookingTrack.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              onPress={() => props.navigation.goBack()}
            />
          );
        })}
      </View>
      <View>
        <ActiveBookings item={data.item} />
      </View>
      <View style={styles.CarDelieveryWrapper}>
        <CarInDelievery />
      </View>
      <View style={styles.WidthView}></View>
      <View style={styles.Wrapper}>
        <Text style={styles.OrderText}>Order Status Details</Text>
        <ORderStatusDetails
          title="Prepairing Your Vehicle"
          current={currentorderstatus}
          OrderStatushandler={setCurrentOrderStatus}
        />
        <ORderStatusDetails
          title="Cleaning & Washing"
          current={currentorderstatus}
          OrderStatushandler={setCurrentOrderStatus}
        />
        <ORderStatusDetails
          title="Delivering"
          current={currentorderstatus}
          OrderStatushandler={setCurrentOrderStatus}
        />
        <ORderStatusDetails
          title="Delivered"
          current={currentorderstatus}
          OrderStatushandler={setCurrentOrderStatus}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  OrderText: {
    fontFamily: "UB",
    fontSize: rf(16),
    color: light.textStandard,
    marginVertical: hp("1%"),
  },
  Wrapper: {
    paddingHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
  WidthView: {
    width: wp("90%"),
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  CarDelieveryWrapper: {
    marginVertical: hp("2%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TrackBooking);
