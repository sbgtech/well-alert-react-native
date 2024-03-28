import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Threads from "./screens/Threads";
import Messages from "./screens/Messages";
import {
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { EditProfile } from "./screens/EditProfile";
import { Profile } from "./screens/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import AvatarUI from "./components/AvatarUI";
import { Login } from "./screens/Login";
import { VerifyOTP } from "./screens/VerifyOTP";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notifications">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            header: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 60,
                  paddingVertical: 20,
                  paddingHorizontal: 12,
                  paddingTop: 35,
                  backgroundColor: "#35374B",
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                >
                  Notifications
                </Text>

                <Pressable onPress={() => navigation.navigate("Profile")}>
                  <AvatarUI
                    name={"Dhaker Salah"}
                    avatarStyle={styles.itemAvatar}
                    size={45}
                  />
                </Pressable>
              </View>
            ),
          })}
          name="Notifications"
          component={Threads}
        />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            title: "Profile",
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Notifications")}>
                <Icon name="sign-out" size={30} color="#000" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: "Edit profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  itemAvatar: {
    height: 50,
    width: 50,
  },
});
