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
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Comments = (props) => {
  const [isselected, setIsSelected] = useState(true);
  const { item } = props;
  return (
    <View style={styles.container}>
      <View style={styles.ProfileNamewrapper}>
        <View style={styles.ProfilePicBody}>
          <Image
            source={item?.img}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1, paddingLeft: "5%" }}>
          <Text style={styles.NameText}>{item?.Name}</Text>
        </View>
        <TouchableOpacity style={styles.RattingBoxBody}>
          <AntDesign name="star" size={hp("1.5%")} color={light.Btn} />
          <Text style={styles.NumText}>{item?.numReview}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.CommentText}>{item?.coment}</Text>
      <View style={styles.LikesWrapper}>
        <TouchableOpacity
          onPress={() => setIsSelected(!isselected)}
          style={styles.ImageBody}
        >
          {isselected == true ? (
            <Image
              source={require("../../../assets/Heart.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../../assets/HeartBlack.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
        <Text style={styles.NoofComments}>{item?.likesnum}</Text>
        <Text
          style={[
            styles.NoofComments,
            {
              color: "#616161",
            },
          ]}
        >
          {item?.days}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "space-evenly",
    height: hp("18%"),
  },
  ProfileNamewrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ProfilePicBody: {
    height: hp("4.5%"),
    width: hp("4.5%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  NameText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
  },
  RattingBoxBody: {
    height: hp("3.5%"),
    width: wp("13%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: light.Btn,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  CommentText: {
    fontFamily: "UR",
    fontSize: rf(13),
    color: light.textStandard,
  },
  LikesWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageBody: {
    height: 15,
    width: 15,
    overflow: "hidden",
  },
  NoofComments: {
    fontFamily: "UR",
    fontSize: rf(10),
    color: light.textStandard,
    marginHorizontal: 10,
  },
  NumText: {
    fontFamily: "UB",
    fontSize: rf(12),
    color: "#1D1138",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Comments);
