import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Moment from "moment";
import AvatarUI from "../components/AvatarUI";

export default function ThreadItem({ navigation, item }) {
  const momentFormatFromNow = Moment(item.message[0].createdAt)
    .startOf("seconds")
    .fromNow();
  const momentFormatL = Moment(item.message[0].createdAt).format("lll");
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Messages", {
          conversation_id: item.id,
        });
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.avatarBloc}>
          <AvatarUI name={item.device.name} size={40} />
        </View>
        <View style={styles.contentBloc}>
          <View style={styles.threadBloc}>
            <Text style={styles.itemThread} numberOfLines={1}>
              {item.device.name}
            </Text>
          </View>
          <View style={styles.msgBloc}>
            <Text numberOfLines={1} style={styles.itemMsg}>
              {item.message[0].body}
            </Text>
          </View>
          <View style={styles.dateBloc}>
            <Text style={styles.itemDate}>{momentFormatL}</Text>
            <Text style={styles.itemDate}>{momentFormatFromNow}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 11,
    paddingRight: 11,
    marginTop: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    gap: 7,
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  contentBloc: {
    width: "88%",
  },
  threadBloc: {
    maxWidth: "90%",
    marginBottom: 4,
  },
  itemThread: {
    fontWeight: "bold",
  },
  msgBloc: {
    maxWidth: "90%",
    marginBottom: 6,
  },
  dateBloc: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "100%",
    paddingRight: 3,
  },
  itemDate: { fontSize: 11, color: "grey" },
});
