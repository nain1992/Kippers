import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import CatogorySelector from "../../component/CatogorySelector";
import { light } from "../../scheme";
import { toprated, Mercedes } from "../../data/dummydata";
import FeaturedCars from "../component/FeaturedCars";

const TopRated = (props) => {
  const [byclass, setByclass] = useState("All");

  const handleClass = (byclass) => {
    setByclass(byclass);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {Mercedes.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              SearchICon
              onPress={() => props.navigation.goBack()}
            />
          );
        })}

        <View style={styles.Wrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CatogorySelector
              title={"All"}
              byclass={byclass}
              handleClass={handleClass}
            />
            <CatogorySelector
              title={"Mercedes"}
              byclass={byclass}
              handleClass={handleClass}
            />
            <CatogorySelector
              title={"Tesla"}
              byclass={byclass}
              handleClass={handleClass}
            />
            <CatogorySelector
              title={"BMW"}
              byclass={byclass}
              handleClass={handleClass}
            />
            <CatogorySelector
              title={"Toyota"}
              byclass={byclass}
              handleClass={handleClass}
            />
          </ScrollView>
        </View>
        <View style={styles.FeaturedCadWrapper}>
          {toprated.map((item, index) => {
            return (
              <FeaturedCars
                item={item}
                key={index}
                onPress={() =>
                  props.navigation.navigate("CarDetails", { item })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  Wrapper: {
    paddingLeft: wp("5%"),
    flexDirection: "row",
    height: hp("10%"),
    alignItems: "center",
  },
  FeaturedCadWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TopRated);
