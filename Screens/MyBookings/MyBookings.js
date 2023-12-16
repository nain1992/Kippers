import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, StatusBar, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import BottomTabMenu from "../../component/BottomTabMenu";
import ForgotHeader from "../../component/ForgotHeader";
import Bookings from "./component/Bookings";
import ActiveBookings from "./component/ActiveBookings";
import {
  Activebookings,
  Completedbooking,
  BookingHeader,
  PopupActtive,
} from "../../data/dummydata";
import CompletedBookings from "./component/CompletedBookings";
import ReviewPopup from "./component/ReviewPopup";

const MyBookings = (props) => {
  const [reviewpopup, setReviewPopup] = useState();
  const [currentBooking, setCurrentBooking] = useState("Active");
  const [popupData, setPopupData] = useState();
  const [trackdata, setTrackData] = useState();

  const renderCurrentBooking = () => {
    switch (currentBooking) {
      case "Active":
        return (
          <ScrollView>
            {Activebookings?.length <= 0 ? (
              <View style={styles.container}>
                <View style={styles.NoBookingWrapper}>
                  <Image
                    source={require("../../assets/NoBooking.png")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            ) : (
              <View style={{ marginBottom: hp("10%"), width: wp("100%") }}>
                {Activebookings.map((item, index) => {
                  return (
                    <ActiveBookings
                      item={item}
                      key={index}
                      onPress={() => {
                        props.navigation.navigate("TrackBooking", { item });
                      }}
                    />
                  );
                })}
              </View>
            )}
          </ScrollView>
        );

      case "Completed":
        return (
          <ScrollView>
            {Completedbooking?.length <= 0 ? (
              <View style={styles.container}>
                <View style={styles.NoBookingWrapper}>
                  <Image
                    source={require("../../assets/NoBooking.png")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            ) : (
              <View style={{ marginBottom: hp("10%"), width: wp("100%") }}>
                {Completedbooking.map((item, index) => {
                  return (
                    <CompletedBookings
                      item={item}
                      key={index}
                      onPress={() => {
                        setPopupData(item);
                        setReviewPopup(true);
                      }}
                    />
                  );
                })}
              </View>
            )}
          </ScrollView>
        );
    }
  };

  return (
    <View style={styles.maincontainer}>
      <StatusBar style="auto" />
      <View>
        {BookingHeader.map((item, index) => {
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
        <Bookings
          currentBooking={currentBooking}
          handleCurrentBooking={setCurrentBooking}
        />
      </View>
      {renderCurrentBooking()}

      <BottomTabMenu activeicon={"Orders"} navigation={props?.navigation} />

      {reviewpopup == true ? (
        <ReviewPopup
          popupData={popupData}
          oncancelpress={() => setReviewPopup(false)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  NoBookingWrapper: {
    height: hp("50%"),
    width: wp("100%"),
    marginTop: hp("10%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(MyBookings);
