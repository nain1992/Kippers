import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { light } from "../../../scheme";

const ProfilePicture = (props) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.ProfileBody}>
        <TouchableOpacity style={styles.Piccontainer}>
          {
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../../../assets/RoundImage.png")
              }
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage} style={styles.UploadIconBody}>
          <MaterialCommunityIcons name="pencil" size={rf(15)} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  ProfileBody: {
    justifyContent: "center",
    alignItems: "center",
  },
  UploadIconBody: {
    height: hp("3%"),
    width: hp("3%"),
    borderRadius: 5,
    backgroundColor: light.Btn,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: wp("2%"),
    bottom: hp("1%"),
    zIndex: 999,
  },
  Piccontainer: {
    height: hp("15%"),
    width: hp("15%"),
    borderRadius: 100,
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ProfilePicture);
