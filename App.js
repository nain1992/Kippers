import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import store from "./state-management/store";
import { AppNavigator } from "./Routes/AppNavigator";
export default function App() {
  const [fontsLoaded] = useFonts({
    UR: require("./assets/Fonts/Urbanist-Regular.ttf"),
    UB: require("./assets/Fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
