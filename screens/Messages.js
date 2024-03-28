import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import ChatBubble from "react-native-chat-bubble";
import Moment from "moment";
import { messages } from "../data";

export default function Messages({ route }) {
  const { conversation_id } = route.params;
  const [conversationMessages, setConversationMessages] = useState(
    messages.filter((msg) => {
      return msg.conversation_id === conversation_id;
    })
  );
  const handleEmpty = () => {
    return <Text style={styles.emptyData}> No messages!</Text>;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>200413 Earl 591-4HM</Text>
      <FlatList
        ListEmptyComponent={handleEmpty}
        onRefresh={() => console.log("refreshing")}
        refreshing={false}
        data={conversationMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble
            onPress={() => Alert.alert("conversation_id", conversation_id)}
            isOwnMessage={false}
            bubbleColor="lightgrey"
            withTail={true}
            style={styles.chatBubble}
          >
            <Text style={styles.text}>{item.body}</Text>
            <Text style={styles.itemDate}>
              {Moment(item.createdAt).format("lll")}
            </Text>
          </ChatBubble>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  name: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  // chatBubble: {
  //   padding: 20,
  //   backgroundColor: "red",
  // },
  text: {
    padding: 5,
  },
  itemDate: {
    fontSize: 11,
    color: "grey",
    paddingHorizontal: 5,
    textAlign: "right",
  },
  emptyData: {
    padding: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
