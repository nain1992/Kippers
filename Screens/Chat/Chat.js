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

import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import {
  Chats,
  InviteHeader,
  chatdata,
  invitation,
} from "../../data/dummydata";
import ForgotHeader from "../../component/ForgotHeader";
import { light } from "../../scheme";
import Invitation from "../InviteFriends/component/Invitation";
import Chatlist from "./components/Chatlist";

const Chat = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />
      {Chats.map((item, index) => {
        return (
          <ForgotHeader
            item={item}
            key={index}
            onPress={() => props.navigation.goBack()}
          />
        );
      })}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          {chatdata.map((item, index) => {
            return (
              <Chatlist
                onPress={() => props?.navigation?.navigate("Inbox")}
                item={item}
                key={index}
              />
            );
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
export default connect(mapStateToProps)(Chat);
