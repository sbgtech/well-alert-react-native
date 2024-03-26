import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Threads from "./screens/Threads";
import Messages from "./screens/Messages";
import { Pressable, StyleSheet } from "react-native";
import { EditProfile } from "./screens/EditProfile";
import { Profile } from "./screens/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import AvatarUI from "./components/AvatarUI";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: "#35374B" },
            headerTitleStyle: { fontWeight: "bold" },
            headerTintColor: "#fff",
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Profile")}>
                <AvatarUI
                  name={"Dhaker Salah"}
                  avatarStyle={styles.itemAvatar}
                  size={40}
                />
              </Pressable>
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
  itemAvatar: {},
});
