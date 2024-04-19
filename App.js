import { Alert } from "react-native";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import messaging from "@react-native-firebase/messaging";
import Screens from "./components/Screens";
import Toast from "react-native-toast-message";

// Keep the splash screen visible while we fetch resources

export default function App() {
  // firebase notification part
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };
  // const showToast = () => {
  //   Toast.show({
  //     type: "success",
  //     text1: "Hello",
  //     text2: "This is some something 👋",
  //   });
  // };

  useEffect(() => {
    if (requestUserPermission()) {
      // return the fcm token for the device
      messaging()
        .getToken()
        .then((token) => {
          console.log(token);
        });
    } else {
      console.log("Failed token status", authStatus);
    }

    // check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });
    // assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });
    //register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("Message handled in the foreground!", remoteMessage);
      // Alert.alert(
      //   "A new FCM message arrived!",
      //   remoteMessage?.notification?.body
      // );
      // showToast();
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <Screens />
      <Toast />
    </Provider>
  );
}
