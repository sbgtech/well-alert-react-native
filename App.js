import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Threads from "./screens/Threads";
import Messages from "./screens/Messages";
import { Pressable } from "react-native";
import { EditProfile } from "./screens/EditProfile";
import { Profile } from "./screens/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import { Login } from "./screens/Login";
import { VerifyOTP } from "./screens/VerifyOTP";
import { Header } from "./components/header";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState, useCallback, useEffect } from "react";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verifyOTP"
          component={VerifyOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => (
              <Header title={"Notifications"} navigation={navigation} />
            ),
          })}
          name="notifications"
          component={Threads}
        />
        <Stack.Screen
          name="messages"
          component={Messages}
          options={() => ({
            headerStyle: { backgroundColor: "#35374B" },
            headerTintColor: "#fff",
            title: "Messages",
          })}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={({ navigation }) => ({
            title: "Profile",
            headerStyle: { backgroundColor: "#35374B" },
            headerTintColor: "#fff",
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("notifications")}>
                <Icon name="sign-out" size={30} color="#fff" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          options={() => ({
            headerStyle: { backgroundColor: "#35374B" },
            headerTintColor: "#fff",
            title: "Edit profile",
          })}
          name="editProfile"
          component={EditProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
