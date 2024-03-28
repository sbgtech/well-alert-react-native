import React, { useState, useRef } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import ButtonUI from "../components/ButtonUI";

export const Login = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inner}
    >
      <TouchableWithoutFeedback
        style={styles.wrapper}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.container}>
          <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={require("../assets/images/logo.png")}
          />
          <View>
            <Text style={styles.title}>
              Login to <Text style={{ color: "#075eec" }}>WellAlert</Text>
            </Text>

            <Text style={styles.subtitle}>
              Get access for your devices notifications
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.inputLabel}>Phone number</Text>

            <PhoneInput
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.phoneInputTextContainerStyle}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              countryPickerProps={{
                countryCodes: ["CA", "US"],
              }}
              defaultCode="CA"
              ref={phoneInput}
              defaultValue={value}
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              autoFocus
            />
          </View>
          <ButtonUI
            onPress={() => {
              console.log(value, formattedValue, valid);
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
              navigation.navigate("VerifyOTP");
            }}
            title={"Log In"}
            textStyle={styles.txtBtnLogin}
            btnStyle={styles.btnLogin}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inner: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    gap: 10,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImg: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1D2A32",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  form: {
    marginTop: 30,
    width: "100%",
    maxWidth: 480,
    gap: 6,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
  },
  phoneInputContainer: {
    width: "100%",
    borderRadius: 9,
    overflow: "hidden",
    minHeight: 55,
    borderWidth: 0.5,
    borderColor: "#35374B",
  },
  phoneInputTextContainerStyle: {
    paddingVertical: 6,
  },
  countryPickerButtonStyle: {
    maxWidth: 100,
  },
  btnContainer: {},
  btnLogin: {
    marginTop: 18,
    marginBottom: 15,
    backgroundColor: "#35374B",
    borderRadius: 9,
    minHeight: 50,
    width: "100%",
    maxWidth: 480,
  },
  txtBtnLogin: { color: "#fff", fontSize: 18 },
});
