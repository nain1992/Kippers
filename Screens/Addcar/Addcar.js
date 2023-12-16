import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import BottomTabMenu from "../../component/BottomTabMenu";
import { light } from "../../scheme";
import Fields from "./components/Fields";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import * as ImagePicker from "expo-image-picker";

const Addcar = (props) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: hp("10%") }}>
          <Text style={styles.addcartext}>Add Car</Text>
          <View style={styles.uploadwrapper}>
            <View style={styles.uploadbody}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={require("../../assets/icon1.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="cover"
                />
              )}
              <TouchableOpacity onPress={pickImage} style={styles.uploadicon}>
                <Image
                  source={require("../../assets/uploadicon.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <Fields title={"Car name"} placeholder="Enter car name" />
          <Fields title={"Car Model"} placeholder="Enter car name" />
          <Fields title={"Car Brand"} placeholder="Enter car name" />
          <Fields title={"Seating Capacity"} placeholder="Enter car name" />
          <Fields title={"Rental Price"} placeholder="Enter car name" />
        </View>
      </ScrollView>
      <BottomTabMenu activeicon={"Addcar"} navigation={props?.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.bgLight,
  },
  addcartext: {
    fontFamily: "UB",
    fontSize: rf(18),
    color: light.textStandard,
    marginLeft: wp("4%"),
    marginTop: hp("3%"),
  },
  uploadwrapper: {
    marginVertical: 10,
  },
  uploadbody: {
    height: hp("15%"),
    width: hp("15%"),
    borderRadius: 10,
    backgroundColor: "#F3F3F3",
    alignSelf: "center",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  uploadtext: {
    fontFamily: "UB",
    fontSize: rf(13),
    color: light.textStandard,
  },
  uploadicon: {
    height: hp("5%"),
    width: hp("5%"),
    backgroundColor: "#FF5E5E",
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Addcar);
