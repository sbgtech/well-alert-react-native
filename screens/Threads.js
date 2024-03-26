import React, { useState } from "react";
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

export default function Threads({ navigation }) {
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
