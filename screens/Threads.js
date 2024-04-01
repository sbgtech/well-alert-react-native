import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import ThreadItem from "../components/threadItem";
import AddThread from "../components/addThread";
import { threads } from "../data";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Threads({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [conversation, setConversation] = useState(threads);
  const submitHandler = (val) => {
    if (val.length > 3) {
      setText("");
      setConversation((prev) => [
        {
          id: Math.random().toString(),
          device: {
            name: val,
          },
          message: [
            {
              body: "This is a default message",
              createdAt: new Date(),
            },
          ],
        },
        ...prev,
      ]);
    } else {
      Alert.alert("OOPS", "Thread must be over 3 characters long", [
        { text: "Close", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const handleEmpty = () => {
    return <Text style={styles.emptyData}> No threads present!</Text>;
  };

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
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        {/* <Header /> */}
        <View style={styles.content}>
          <AddThread submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              ListEmptyComponent={handleEmpty}
              onRefresh={() => console.log("refreshing")}
              //if set to true, the UI will show a loading indicator
              refreshing={false}
              data={conversation}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ThreadItem navigation={navigation} item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 10,
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  emptyData: {
    padding: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
