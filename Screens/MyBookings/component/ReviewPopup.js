import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
  Modal,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { light } from "../../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const MyBookings = (props) => {
  const { item, popupData } = props;

  const [ratting, setRatting] = useState(0);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);

  return (
    <Modal transparent={true} animationType="fade">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}>
        <View style={styles.maincontainer}>
          <Text style={styles.HeaderText}>Leave a Review</Text>
          <View style={styles.ActiveBookingWrapper}>
            <View style={styles.ImageBody}>
              <Image
                source={popupData?.img}
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
              <Text style={styles.TitleText}>{popupData.title}</Text>
              <View style={styles.CompletedBody}>
                <Text style={styles.Text}>Completed</Text>
              </View>
              <Text style={styles.PriceText}>{popupData.price}</Text>
            </View>
          </View>
          <Text
            style={[
              styles.HeaderText,
              {
                marginVertical: 10,
              },
            ]}
          >
            How is your car?
          </Text>
          <Text style={styles.GiveReviewText}>
            Please give your rating & also your review...
          </Text>
          <View style={styles.RattingStarBody}>
            {stars.map((item, index) => (
              <TouchableOpacity
                onPress={() => setRatting(index)}
                style={styles.StarBody}
              >
                <Image
                  source={
                    index <= ratting
                      ? require("../../../assets/staryellow.png")
                      : require("../../../assets/Starlight.png")
                  }
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.GiveCommentBody}>
            <TextInput
              style={styles.FeedbackBody}
              placeholder="Tell us your Feedback!"
              multiline={true}
            />
          </View>
          <View style={styles.BtnWrapper}>
            <TouchableOpacity
              onPress={props?.oncancelpress}
              style={styles.BtnBody}
            >
              <Text style={styles.BtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.BtnBody,
                {
                  backgroundColor: light.Btn,
                },
              ]}
            >
              <Text
                style={[
                  styles.BtnText,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: hp("70%"),
    width: wp("100%"),
    position: "absolute",
    backgroundColor: light.bgLight,
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: hp("2%"),
  },
  HeaderText: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    textAlign: "center",
  },
  ActiveBookingWrapper: {
    height: hp("18%"),
    width: wp("90%"),
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    alignSelf: "center",
    marginVertical: hp("3%"),
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
  CompletedBody: {
    height: hp("3.5%"),
    width: wp("15%"),
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontFamily: "UR",
    fontSize: rf(8),
    color: "#35383F",
  },
  GiveReviewText: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#616161",
    textAlign: "center",
  },
  RattingStarBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("2%"),
  },
  StarBody: {
    height: hp("3.5%"),
    width: hp("3.5%"),
    overflow: "hidden",
    marginHorizontal: 10,
  },
  GiveCommentBody: {
    height: hp("7%"),
    width: wp("90^"),
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: hp("2%"),
    overflow: "hidden",
  },
  FeedbackBody: {
    height: "100%",
    width: "100%",
    fontFamily: "UB",
    fontSize: rf(13),
    color: light.textStandard,
  },
  BtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  BtnBody: {
    height: hp("7%"),
    width: wp("43%"),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7E7E7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  BtnText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: "#35383F",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(MyBookings);
