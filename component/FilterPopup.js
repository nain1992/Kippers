import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  Modal,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../scheme";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CatogorySelector from "./CatogorySelector";

const FilterPopup = (props) => {
  const [bybrand, setByBrand] = useState("All");
  const [bytype, setByType] = useState("All");
  const [sortby, setSortBy] = useState("All");
  const [byratting, setByRatting] = useState("All");
  const [rangevalue, setRangwValue] = useState(["AED 30K", "AED 50K"]);

  // multiSliderValuesChange = (values) => {
  //   setvalues
  // };

  const handleClass = (bybrand) => {
    setByBrand(bybrand);
  };
  const handleType = (bytype) => {
    setByType(bytype);
  };

  const handleSort = (sortby) => {
    setSortBy(sortby);
  };

  const handleRatting = (byratting) => {
    setByRatting(byratting);
  };
  return (
    <Modal transparent={true} animationType="fade">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}>
        <View style={styles.PopupView}>
          <Text style={styles.TextSort}>Sort & Filter</Text>
          <View style={styles.TextWrapper}>
            <Text style={styles.CatogoryText}>Car Brands</Text>
          </View>
          <View style={styles.WRapper}>
            <ScrollView horizontal={true}>
              <CatogorySelector
                title={"All"}
                byclass={bybrand}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"Mercedes"}
                byclass={bybrand}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"Tesla"}
                byclass={bybrand}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"BMW"}
                byclass={bybrand}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"Toyota"}
                byclass={bybrand}
                handleClass={handleClass}
              />
            </ScrollView>
          </View>
          <View style={styles.TextWrapper}>
            <Text style={styles.CatogoryText}>Car Type</Text>
          </View>
          <View style={styles.WRapper}>
            <ScrollView horizontal={true}>
              <CatogorySelector
                title={"All"}
                byclass={bytype}
                handleClass={handleType}
              />
              <CatogorySelector
                title={"Luxury"}
                byclass={bytype}
                handleClass={handleType}
              />
              <CatogorySelector
                title={"Sports"}
                byclass={bytype}
                handleClass={handleType}
              />
              <CatogorySelector
                title={"Business"}
                byclass={bytype}
                handleClass={handleType}
              />
            </ScrollView>
          </View>

          <View style={styles.TextWrapper}>
            <Text style={styles.CatogoryText}>Price Range</Text>
          </View>
          <View style={styles.WRapper}>
            <ScrollView horizontal={true}>
              <CatogorySelector
                title={"All"}
                byclass={bytype}
                handleClass={handleType}
              />
              <CatogorySelector
                title={"Low"}
                byclass={bytype}
                handleClass={handleType}
              />
              <CatogorySelector
                title={"Medium"}
                byclass={bytype}
                handleClass={handleType}
              />
              <CatogorySelector
                title={"High"}
                byclass={bytype}
                handleClass={handleType}
              />
            </ScrollView>
          </View>
          <View style={styles.TextWrapper}>
            <Text style={styles.CatogoryText}>Sort By</Text>
          </View>
          <View style={styles.WRapper}>
            <ScrollView horizontal={true}>
              <CatogorySelector
                title={"Popular"}
                byclass={sortby}
                handleClass={handleSort}
              />
              <CatogorySelector
                title={"Most Recent"}
                byclass={sortby}
                handleClass={handleSort}
              />
              <CatogorySelector
                title={"Price High"}
                byclass={sortby}
                handleClass={handleSort}
              />
              <CatogorySelector
                title={"Price Low"}
                byclass={sortby}
                handleClass={handleSort}
              />
            </ScrollView>
          </View>
          <View style={styles.TextWrapper}>
            <Text style={styles.CatogoryText}>Rating</Text>
          </View>
          <View style={styles.WRapper}>
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
            </ScrollView>
          </View>
          <View style={styles.BtnWrapper}>
            <TouchableOpacity style={styles.BtnBody}>
              <Text style={styles.BtnText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props?.onclose}
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
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  PopupView: {
    height: hp("90%"),
    width: wp("100%"),
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: hp("2%"),
  },
  TextSort: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    textAlign: "center",
  },
  CatogoryText: {
    fontFamily: "UB",
    fontSize: rf(14),
    color: light.textStandard,
  },
  TextWrapper: {
    marginVertical: hp("3%"),
  },
  WRapper: {},
  BtnWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    flex: 1,
    marginBottom: hp("3%"),
  },
  BtnBody: {
    height: hp("7%"),
    width: wp("40%"),
    backgroundColor: "#E7E7E7",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
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
export default connect(mapStateToProps)(FilterPopup);
