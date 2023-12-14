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
import { dark, light } from "../../scheme";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import Comments from "./component/Comments";
import { comments, ReviewHeader } from "../../data/dummydata";
import CatogorySelector from "../../component/CatogorySelector";

const Reviews = (props) => {
  const [byratting, setByRatting] = useState("All");

  const handleRatting = (byratting) => {
    setByRatting(byratting);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      <ScrollView>
        {ReviewHeader.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              onPress={() => props.navigation.goBack()}
            />
          );
        })}
        <View style={styles.Wrapper}>
          <ScrollView horizontal={true}>
            <CatogorySelector
              title={"All"}
              byclass={byratting}
              handleClass={handleRatting}
              Icon
            />
            <CatogorySelector
              title={"5"}
              byclass={byratting}
              handleClass={handleRatting}
              Icon
            />
            <CatogorySelector
              title={"4"}
              byclass={byratting}
              handleClass={handleRatting}
              Icon
            />
            <CatogorySelector
              title={"3"}
              byclass={byratting}
              handleClass={handleRatting}
              Icon
            />
            <CatogorySelector
              title={"2"}
              byclass={byratting}
              handleClass={handleRatting}
              Icon
            />
            <CatogorySelector
              title={"1"}
              byclass={byratting}
              handleClass={handleRatting}
              Icon
            />
          </ScrollView>
        </View>
        <View>
          {comments.map((item, index) => {
            return <Comments item={item} key={index} />;
          })}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  Wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp("5%"),
    height: hp("8%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Reviews);
