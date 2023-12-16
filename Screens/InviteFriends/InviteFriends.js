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
import { dark, light } from "../../scheme";

import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ForgotHeader from "../../component/ForgotHeader";
import Invitation from "./component/Invitation";
import { InviteHeader, invitation } from "../../data/dummydata";

const InviteFriends = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      {InviteHeader.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <ScrollView>
        <View>
          {invitation.map((item, index) => {
            return <Invitation item={item} key={index} />;
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
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(InviteFriends);
