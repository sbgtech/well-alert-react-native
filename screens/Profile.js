import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";
import AvatarUI from "../components/AvatarUI";

export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AvatarUI
        name={"Dhaker Salah"}
        avatarStyle={styles.itemAvatar}
        size={80}
      />
      <View>
        <Text style={styles.label}>First name</Text>
        <Text style={styles.text}>Dhaker</Text>
      </View>
      <View>
        <Text style={styles.label}>Last name</Text>
        <Text style={styles.text}>Salah</Text>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>Dhaker@gmail.com</Text>
      </View>
      <View>
        <Text style={styles.label}>Phone number</Text>
        <Text style={styles.text}>+156478865</Text>
      </View>
      <ButtonUI
        onPress={() => navigation.navigate("EditProfile")}
        title={"Edit profile"}
        textStyle={styles.txtBtnEdit}
        btnStyle={styles.btnEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
  },
  itemAvatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    color: "grey",
    fontSize: 16,
  },
  text: {
    paddingTop: 5,
  },
  btnEdit: {
    marginTop: "auto",
    marginBottom: 15,
    backgroundColor: "#35374B",
    borderRadius: 9,
    minHeight: 50,
  },
  txtBtnEdit: { color: "#fff", fontSize: 16 },
});
