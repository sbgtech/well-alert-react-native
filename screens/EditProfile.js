import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonUI from "../components/ButtonUI";

export const EditProfile = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraHeight={120}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>First name</Text>
          <TextInput style={styles.textInput} value={"Dhaker"} />
        </View>
        <View>
          <Text style={styles.text}>Last name</Text>
          <TextInput style={styles.textInput} value={"Salah"} />
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.textInput} value={"dhaker@gmail.com"} />
        </View>
        <View>
          <Text style={styles.text}>Phone number</Text>
          <TextInput style={styles.textInput} value={"+156478865"} />
        </View>
        <ButtonUI
          onPress={() => navigation.navigate("profile")}
          title={"Save profile"}
          textStyle={styles.txtBtnSave}
          btnStyle={styles.btnSave}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "fff",
    // height: Dimensions.get("screen").height,
  },
  text: {
    color: "grey",
    marginBottom: 4,
    paddingLeft: 6,
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: "#979797",
    borderBottomWidth: 0.7,
    marginBottom: 25,
  },
  btnSave: {
    marginTop: 20,
    backgroundColor: "#35374B",
    borderRadius: 9,
    minHeight: 50,
  },
  txtBtnSave: { color: "#fff", fontSize: 16 },
});
