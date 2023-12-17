import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Carcollection = (props) => {
  // const [isedit, setIsedit] = useState(false);
  const [isdeleted, setIsdeleted] = useState(false);
  const { item, isedit, setIsedit, onDotPress } = props;
  return (
    <Pressable onPress={props?.onPress} style={{ marginVertical: hp("2%") }}>
      <View style={styles.BodyWRapper}>
        <TouchableOpacity
          onPress={() => setIsedit(true)}
          style={styles.FavourateIcon}
        >
          <Entypo name="dots-three-vertical" size={hp("2%")} color="#000000" />
        </TouchableOpacity>
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
            source={require("../../../assets/Star.png")}
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
      {isedit ? (
        <View style={styles.dropdown}>
          <TouchableOpacity
            // onPress={() => setIsedit(false)}
            onPress={onDotPress}
            style={styles.innerbody}
          >
            <AntDesign name="download" size={hp("2%")} color="black" />
            <Text style={styles.edittext}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props?.onDletePress}
            style={styles.innerbody}
          >
            <MaterialCommunityIcons
              name="delete-outline"
              size={hp("2%")}
              color="#FF1111"
            />
            <Text
              style={[
                styles.edittext,
                {
                  color: "#FF1111",
                },
              ]}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
  dropdown: {
    height: hp("14%"),
    width: wp("26%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    right: 0,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  innerbody: {
    flexDirection: "row",
    alignItems: "center",
  },
  edittext: {
    fontFamily: "UR",
    fontSize: rf(12),
    color: "#000000",
    marginLeft: 5,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Carcollection);
