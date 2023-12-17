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

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="Login" component={Login} />
      <Screen name="YourProfileDetails" component={YourProfileDetails} />
      <Screen name="Home" component={Home} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="ConfirmCode" component={ConfirmCode} />
      <Screen name="CreatePassword" component={CreatePassword} />
      <Screen name="MyWatchList" component={MyWatchList} />
      <Screen name="TopRated" component={TopRated} />
      <Screen name="Offers" component={Offers} />
      <Screen name="TrustedPartner" component={TrustedPartner} />
      <Screen name="Partner" component={Partner} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Reviews" component={Reviews} />
      <Screen
        name="DelieveryAddressDetails"
        component={DelieveryAddressDetails}
      />
      <Screen name="MyBookings" component={MyBookings} />
      <Screen name="TrackBooking" component={TrackBooking} />
      <Screen name="Profile" component={Profile} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="Address" component={Address} />
      <Screen name="AddNewAddress" component={AddNewAddress} />
      <Screen name="Language" component={Language} />
      <Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Screen name="InviteFriends" component={InviteFriends} />
      <Screen name="HelpContact" component={HelpContact} />
      <Screen name="AllMakes" component={AllMakes} />
      <Screen name="Addcar" component={Addcar} />
      <Screen name="Inbox" component={Inbox} />
      <Screen name="Mycars" component={Mycars} />
      <Screen name="Chat" component={Chat} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
