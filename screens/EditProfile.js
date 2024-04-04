import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonUI from "../components/ButtonUI";
import { useSelector } from "react-redux";

export const EditProfile = ({ navigation }) => {
  const auth = useSelector((state) => state.user);
  if (!auth.user) {
    return null;
  }
  const { name, email, country_code, phone_number } = auth.user;

  const [username, setUsername] = useState(name);
  const [useremail, setUseremail] = useState(email);

  const onNameChanged = (e) => {
    setUsername(e);
    console.log(e);
  };
  const onEmailChanged = (e) => {
    setUseremail(e);
    console.log(e);
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraHeight={120}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={onNameChanged}
          />
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={useremail}
            onChangeText={onEmailChanged}
          />
        </View>
        <View>
          <Text style={styles.text}>Country code</Text>
          <TextInput
            style={styles.textInput}
            value={country_code}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.text}>Phone number</Text>
          <TextInput
            style={styles.textInput}
            value={phone_number}
            editable={false}
          />
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
