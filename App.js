import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import store from "./state-management/store";
import { AppNavigator } from "./Routes/AppNavigator";
import 'expo-dev-client';
import { ActivityIndicator,View } from "react-native";
import 'react-native-gesture-handler';
export default function App() {
  const [fontsLoaded] = useFonts({
    UR: require("./assets/Fonts/Urbanist-Regular.ttf"),
    UB: require("./assets/Fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, alignItem: 'center', justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#222" />
    </View>;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
