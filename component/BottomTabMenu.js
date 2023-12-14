import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const BottomTabMenu = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {props?.activeicon === "Home" ? (
        <TouchableOpacity
          style={styles.innerwrapper}
          onPress={() => props?.navigation?.navigate("Home")}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/6.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Home</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.innerwrapper}
          onPress={() => props?.navigation?.navigate("Home")}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/1.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Home</Text>
        </TouchableOpacity>
      )}
      {props?.activeicon === "Orders" ? (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("MyBookings")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/7.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Orders</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("MyBookings")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/2.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Orders</Text>
        </TouchableOpacity>
      )}
      {props?.activeicon === "Addcar" ? (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Addcar")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/8.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Add Car</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Addcar")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/3.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Add Car</Text>
        </TouchableOpacity>
      )}
      {props?.activeicon === "Inbox" ? (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Inbox")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/9.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Inbox</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Inbox")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/4.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Inbox</Text>
        </TouchableOpacity>
      )}
      {props?.activeicon === "Profile" ? (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Profile")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/10.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Profile")}
          style={styles.innerwrapper}
        >
          <View style={styles.iconbody}>
            <Image
              source={require("../assets/Tabmenu/5.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.icontext}>Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("10%"),
    width: wp("100%"),
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
  },
  iconbody: {
    height: hp("3%"),
    width: hp("3%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  innerwrapper: {
    alignItems: "center",
  },
  icontext: {
    fontFamily: "UB",
    fontSize: rf(10),
    color: "#222",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(BottomTabMenu);
