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
      <Text style={styles.text}>Firstname : Dhaker</Text>
      <Text style={styles.text}>Lastname : Salah</Text>
      <Text style={styles.text}>Email : Dhaker@gmail.com</Text>
      <Text style={styles.text}>Phone number : +156478865</Text>
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
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    width: "100%",
    padding: 14,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#979797",
  },
  btnEdit: {
    marginTop: "auto",
    marginBottom: 15,
    backgroundColor: "#35374B",
    borderRadius: 15,
    minHeight: 50,
  },
  txtBtnEdit: { color: "#fff", fontSize: 16 },
});
