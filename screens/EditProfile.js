import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";

export const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>First name</Text>
        <TextInput style={styles.input} value={"Dhaker"} />
      </View>
      <View>
        <Text style={styles.text}>Last name</Text>
        <TextInput style={styles.input} value={"Salah"} />
      </View>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} value={"dhaker@gmail.com"} />
      </View>
      <View>
        <Text style={styles.text}>Phone number</Text>
        <TextInput style={styles.input} value={"+156478865"} />
      </View>
      <ButtonUI
        onPress={() => navigation.navigate("Profile")}
        title={"Save profile"}
        textStyle={styles.txtBtnSave}
        btnStyle={styles.btnSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 16,
  },
  text: {
    color: "grey",
    marginBottom: 4,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#979797",
  },
  btnSave: {
    marginTop: "auto",
    marginBottom: 15,
    backgroundColor: "#35374B",
    borderRadius: 15,
    minHeight: 50,
  },
  txtBtnSave: { color: "#fff", fontSize: 16 },
});
