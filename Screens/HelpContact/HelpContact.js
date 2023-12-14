import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { light } from "../../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Bookings from "./component/Bookings";
import FAQS from "./component/FAQS";
import Contactus from "./component/Contactus";
import ForgotHeader from "../../component/ForgotHeader";
import CatogorySelector from "../component/CatogorySelector";
import { HelpHeader } from "../../data/dummydata";

const HelpContact = (props) => {
  const [currentPage, setCurrentPage] = useState("FAQS");
  const [bycategory, setByCategory] = useState("General");

  const handleCategory = (bycategory) => {
    setByCategory(bycategory);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "FAQS":
        return (
          <View>
            {/* <View style={styles.SelectorWrapper}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <CatogorySelector
                  title={"General"}
                  byclass={bycategory}
                  handleClass={handleCategory}
                  Icon
                />
                <CatogorySelector
                  title={"Account"}
                  byclass={bycategory}
                  handleClass={handleCategory}
                  Icon
                />
                <CatogorySelector
                  title={"Service"}
                  byclass={bycategory}
                  handleClass={handleCategory}
                  Icon
                />
                <CatogorySelector
                  title={"Payment"}
                  byclass={bycategory}
                  handleClass={handleCategory}
                  Icon
                />
              </ScrollView>
            </View> */}
            <ScrollView>
              <FAQS title="What is Rent Monthly?" />
              <FAQS title="How to use Rent Monthly?" />
              <FAQS title="How do I cancel an orders?" />
              <FAQS title="Can I get a discount at checkout?" />
              <FAQS title="Why can't I make a payment?" />
            </ScrollView>
          </View>
        );

      case "Contact us":
        return (
          <View>
            <Contactus
              title="Phone"
              image={require("../../assets/Calling.png")}
            />
            <Contactus
              title="WhatsApp"
              image={require("../../assets/whatsapp.png")}
            />
            <Contactus
              title="Website"
              image={require("../../assets/globe.png")}
            />
            <Contactus
              title="Facebook"
              image={require("../../assets/Fb.png")}
            />
            <Contactus
              title="Twitter"
              image={require("../../assets/twitter.png")}
            />
            <Contactus
              title="Instagram"
              image={require("../../assets/insta.png")}
            />
          </View>
        );
    }
  };

  return (
    <View style={styles.maincontainer}>
      <StatusBar style="auto" />
      <View>
        {HelpHeader.map((item, index) => {
          return (
            <ForgotHeader
              item={item}
              key={index}
              onPress={() => props.navigation.goBack()}
            />
          );
        })}
      </View>

      <View>
        <Bookings
          currentPage={currentPage}
          handleCurrentPage={setCurrentPage}
        />
      </View>
      {renderCurrentPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: light.bgLight,
  },

  SelectorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp("5%"),
    marginVertical: hp("3%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(HelpContact);
