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

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="notifications">
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
