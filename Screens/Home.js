import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dark, light } from "../scheme";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import ProfileName from "./component/ProfileName";
import SpecialOffer from "./component/SpecialOffer";
import CarSponsers from "../component/CarSponsers";
import { dummydata, Offers, featured } from "../data/dummydata";
import FeaturedCars from "./component/FeaturedCars";
import CatogorySelector from "./component/CatogorySelector";
import BottomTabMenu from "../component/BottomTabMenu";
import FilterPopup from "../component/FilterPopup";

const Home = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props?.theme?.bgLight,
    },
    specialOfferTextWraper: {
      paddingHorizontal: wp("5%"),
      height: hp("7%"),
      width: wp("100%"),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    SpecialOfferText: {
      color: props?.theme?.LableText,
      fontFamily: "UB",
      fontSize: rf(16),
    },
    ViewAllText: {
      color: light.Btn,
      fontFamily: "UB",
      fontSize: rf(12),
    },
    sponsersWrapper: {
      flexWrap: "wrap",
      paddingHorizontal: wp("5%"),
      justifyContent: "space-between",
      flexDirection: "row",
    },
    FeaturedCadWrapper: {
      paddingHorizontal: wp("4%"),
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    PartnersWrapper: {
      flexDirection: "row",
      paddingLeft: wp("5%"),
    },
    CatogorySelectorWRapper: {
      flexDirection: "row",
      paddingLeft: wp("5%"),
    },
  });

  const [byclass, setByclass] = useState("All");
  const [filterpopup, setFilterPopup] = useState(false);

  console.log(data);
  let name = data?.fullname;

  const handleClass = (byclass) => {
    setByclass(byclass);
  };

  useEffect(() => {
    props?.users;
  }, []);
  let data = props?.users;
  let names = data?.fullname.split(" ")[0];
  // let fname = names?.shift(0);
  console.log("here " + names);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: hp("10%") }}>
          <View>
            {dummydata.map((item, index) => {
              return (
                <ProfileName
                  onPress={() => setFilterPopup(true)}
                  item={item}
                  key={index}
                  name={names}
                />
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Offers")}
            style={styles.specialOfferTextWraper}
          >
            <Text style={styles.SpecialOfferText}>Special Offers</Text>
            <>
              <Text style={styles.ViewAllText}>See All</Text>
            </>
          </TouchableOpacity>
          <View>
            <SpecialOffer
              onPress={() => props.navigation.navigate("TopRated")}
            />
          </View>
          <View style={styles.sponsersWrapper}>
            <CarSponsers
              Img={require("../assets/Mersedies.png")}
              Title="Mercedes"
              onPress={() => props.navigation.navigate("TopRated")}
            />
            <CarSponsers Img={require("../assets/Tesla.png")} Title="Tesla" />
            <CarSponsers
              Img={require("../assets/BMW.png")}
              Title="BMW"
              // onPress={() => props.navigation.navigate("CarDetails")}
            />
            <CarSponsers Img={require("../assets/Toyota.png")} Title="Toyota" />
            <CarSponsers Img={require("../assets/Volvo.png")} Title="Volvo" />
            <CarSponsers
              Img={require("../assets/Bugati.png")}
              Title="Bugatti"
            />
            <CarSponsers Img={require("../assets/Honda.png")} Title="Honda" />
            <CarSponsers
              Icon
              Title="More"
              // onPress={() => props.navigation.navigate("AllMakes")}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TopRated")}
            style={styles.specialOfferTextWraper}
          >
            <Text style={styles.SpecialOfferText}>Featured Cars</Text>
            <>
              <Text style={styles.ViewAllText}>See All</Text>
            </>
          </TouchableOpacity>
          <View style={styles.FeaturedCadWrapper}>
            {featured.map((item, index) => {
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

          <TouchableOpacity
            onPress={() => props.navigation.navigate("TopRated")}
            style={styles.specialOfferTextWraper}
          >
            <Text style={styles.SpecialOfferText}>By Class</Text>
            <>
              <Text style={styles.ViewAllText}>See All</Text>
            </>
          </TouchableOpacity>
          <View style={styles.CatogorySelectorWRapper}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CatogorySelector
                title={"All"}
                byclass={byclass}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"Luxury Class"}
                byclass={byclass}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"Business Class"}
                byclass={byclass}
                handleClass={handleClass}
              />
              <CatogorySelector
                title={"Sports Class"}
                byclass={byclass}
                handleClass={handleClass}
              />
            </ScrollView>
          </View>
          <View style={styles.FeaturedCadWrapper}>
            {featured.map((item, index) => {
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
        </View>
      </ScrollView>
      <BottomTabMenu activeicon={"Home"} navigation={props?.navigation} />
      {filterpopup == true ? (
        <FilterPopup onclose={() => setFilterPopup(false)} />
      ) : null}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  theme: state.theme.theme,
  users: state.main.new_user,
});
export default connect(mapStateToProps)(Home);
