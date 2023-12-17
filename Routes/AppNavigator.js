import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import OnBoarding from "../Screens/OnBoarding/OnBoarding";
import SignIn from "../Screens/SignIn/SignIn";
import CreateAccount from "../Screens/CreateAccount/CreateAccount";
import Login from "../Screens/Login/Login";
import YourProfileDetails from "../Screens/YourProfileDetails/YourProfileDetails";
import ForgotPassword from "../Screens/ForgotPassword/ForgotPassword";
import ConfirmCode from "../Screens/ConfirmCode/ConfirmCode";
import CreatePassword from "../Screens/CreatePassword/CreatePassword";
import MyWatchList from "../Screens/MyWatchList/MyWatchList";
import Offers from "../Screens/SpecialOffers/Offers";
import TopRated from "../Screens/TopRated/TopRated";
import TrustedPartner from "../Screens/TrustedPartner/TrustedPartner";
import Partner from "../Screens/Partner/Partner";
import CarDetails from "../Screens/CarDetails/CarDetails";
import Reviews from "../Screens/Reviews/Reviews";
import DelieveryAddressDetails from "../Screens/DelieveryAddressDetails/DelieveryAddressDetails";
import MyBookings from "../Screens/MyBookings/MyBookings";
import TrackBooking from "../Screens/TrackBooking/TrackBooking";
import Profile from "../Screens/Profile/Profile";
import EditProfile from "../Screens/EditProfile/EditProfile";
import Address from "../Screens/Address/Address";
import AddNewAddress from "../Screens/AddNewAddress/AddNewAddress";
import Language from "../Screens/Language/Language";
import PrivacyPolicy from "../Screens/PrivacyPolicy/PrivacyPolicy";
import InviteFriends from "../Screens/InviteFriends/InviteFriends";
import HelpContact from "../Screens/HelpContact/HelpContact";
import AllMakes from "../Screens/AllMakes/AllMakes";
import Addcar from "../Screens/Addcar/Addcar";
import Inbox from "../Screens/Inbox/Inbox";
import Mycars from "../Screens/Mycars/Mycars";
import Chat from "../Screens/Chat/Chat";
import Welcome from "../Screens/Welcome/Welcome";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Welcome"  component={gestureHandlerRootHOC(Welcome)} />
      <Screen name="OnBoarding" component={gestureHandlerRootHOC(OnBoarding)} />
      <Screen name="SignIn" component={gestureHandlerRootHOC(SignIn)} />
      <Screen name="CreateAccount" component={gestureHandlerRootHOC(CreateAccount)} />
      <Screen name="Login" component={gestureHandlerRootHOC(Login)} />
      <Screen name="YourProfileDetails" component={gestureHandlerRootHOC(YourProfileDetails)} />
      <Screen name="Home" component={gestureHandlerRootHOC(Home)} />
      <Screen name="ForgotPassword" component={gestureHandlerRootHOC(ForgotPassword)} />
      <Screen name="ConfirmCode" component={gestureHandlerRootHOC(ConfirmCode)} />
      <Screen name="CreatePassword" component={gestureHandlerRootHOC(CreatePassword)} />
      <Screen name="MyWatchList" component={gestureHandlerRootHOC(MyWatchList)} />
      <Screen name="TopRated" component={gestureHandlerRootHOC(TopRated)} />
      <Screen name="Offers" component={gestureHandlerRootHOC(Offers)} />
      <Screen name="TrustedPartner" component={gestureHandlerRootHOC(TrustedPartner)} />
      <Screen name="Partner" component={gestureHandlerRootHOC(Partner)} />
      <Screen name="CarDetails" component={gestureHandlerRootHOC(CarDetails)} />
      <Screen name="Reviews" component={gestureHandlerRootHOC(Reviews)} />
      <Screen
        name="DelieveryAddressDetails"
        component={gestureHandlerRootHOC(DelieveryAddressDetails)}
      />
      <Screen name="MyBookings" component={gestureHandlerRootHOC(MyBookings)} />
      <Screen name="TrackBooking" component={gestureHandlerRootHOC(TrackBooking)} />
      <Screen name="Profile" component={gestureHandlerRootHOC(Profile)} />
      <Screen name="EditProfile" component={gestureHandlerRootHOC(EditProfile)} />
      <Screen name="Address" component={gestureHandlerRootHOC(Address)} />
      <Screen name="AddNewAddress" component={gestureHandlerRootHOC(AddNewAddress)} />
      <Screen name="Language" component={gestureHandlerRootHOC(Language)} />
      <Screen name="PrivacyPolicy" component={gestureHandlerRootHOC(PrivacyPolicy)} />
      <Screen name="InviteFriends" component={gestureHandlerRootHOC(InviteFriends)} />
      <Screen name="HelpContact" component={gestureHandlerRootHOC(HelpContact)} />
      <Screen name="AllMakes" component={gestureHandlerRootHOC(AllMakes)} />
      <Screen name="Addcar" component={gestureHandlerRootHOC(Addcar)} />
      <Screen name="Inbox" component={gestureHandlerRootHOC(Inbox)} />
      <Screen name="Mycars" component={gestureHandlerRootHOC(Mycars)} />
      <Screen name="Chat" component={gestureHandlerRootHOC(Chat)} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
