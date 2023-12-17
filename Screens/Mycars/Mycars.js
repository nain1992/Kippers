import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AddressHeader, featured, mycars } from "../../data/dummydata";
import ForgotHeader from "../../component/ForgotHeader";
import { light } from "../../scheme";
import FeaturedCars from "../component/FeaturedCars";
import { AntDesign } from "@expo/vector-icons";
import Carcollection from "./components/Carcollection";
import Confirmationmodel from "./components/Confirmationmodel";

const Mycars = (props) => {
  const [ismodelvisible, setisModelvisible] = useState(false);
  const [isedit, setIsedit] = useState(false);

  const handleDelete = () => {
    setIsedit(false);
    setisModelvisible(true);
  };

  const handleDostPress = () => {
    setIsedit(true);
  };
  return (
    <View style={styles.container}>
      {mycars.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <View style={styles.searchwrapper}>
        <View style={styles.serachcarbody}>
          <TextInput
            placeholder="Search"
            multiline
            style={styles.inputstyles}
          />
        </View>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Addcar")}
          style={styles.addcarbody}
        >
          <AntDesign name="plus" size={hp("3%")} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.FeaturedCadWrapper}>
          {featured.map((item, index) => {
            return (
              <Carcollection
                isedit={isedit}
                setIsedit={setIsedit}
                onDotPress={handleDostPress}
                onDletePress={handleDelete}
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
      {ismodelvisible && (
        <Confirmationmodel
          // onOkPress
          oncancelPress={() => setisModelvisible(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  FeaturedCadWrapper: {
    paddingHorizontal: wp("4%"),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  searchwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
  },
  serachcarbody: {
    height: hp("6%"),
    width: wp("75%"),
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingLeft: 10,
  },
  inputstyles: {
    height: "100%",
    width: "100%",
    fontFamily: "UR",
    fontSize: rf(11),
    color: "#000000",
  },
  addcarbody: {
    height: hp("6%"),
    width: wp("12%"),
    borderRadius: 10,
    backgroundColor: "#FF1111",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Mycars);
