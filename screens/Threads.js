import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import ThreadItem from "../components/threadItem";
import { useDispatch, useSelector } from "react-redux";
import { getThreads } from "../store/thread/threadAction";

export default function Threads({ navigation }) {
  // const [conversation, setConversation] = useState(threads);
  const threads = useSelector((state) => state.thread);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThreads());
  }, []);

  const handleEmpty = () => {
    return <Text style={styles.emptyData}> No threads present!</Text>;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={handleEmpty}
          onRefresh={() => dispatch(getThreads())}
          //if set to true, the UI will show a loading indicator
          refreshing={false}
          data={threads.threads}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThreadItem navigation={navigation} item={item} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  emptyData: {
    padding: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
