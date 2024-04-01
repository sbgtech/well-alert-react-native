import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";

export const VerifyOTP = ({ navigation }) => {
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
            source={require("../assets/images/otp.png")}
          />
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.subtitle}>
            We are automatically detecting notification send to your mobile
            phone number
          </Text>
          <OtpInput
            numberOfDigits={4}
            focusColor="#35374B"
            focusStickBlinkingDuration={500}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => {
              console.log(`OTP is ${text}`);
              navigation.navigate("notifications");
            }}
            theme={{
              containerStyle: styles.containerInputs,
              inputsContainerStyle: styles.inputsContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />
          <TouchableOpacity style={styles.resendContainer}>
            <Text>Don't receive the code ?</Text>
            <TouchableOpacity>
              <Text style={styles.resend}>Resend code</Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
    gap: 0,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  inputsContainer: {
    // backgroundColor: "pink",
    marginHorizontal: 50,
    marginVertical: 20,
    width: "100%",
    maxWidth: 340,
  },
  pinCodeContainer: {
    // backgroundColor: "orange",
    width: 58,
    height: 58,
    borderRadius: 15,
    marginVertical: 8,
    borderColor: "#8d8d8d",
  },
  pinCodeText: {
    // backgroundColor: "red",
  },
  focusStick: {
    backgroundColor: "#000",
  },
  activePinCodeContainer: {
    backgroundColor: "#e9e9e9",
    borderColor: "#000",
  },
  headerImg: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
    // textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#535353",
    width: "80%",
    textAlign: "center",
  },
  resendContainer: {
    flexDirection: "row",
    gap: 8,
  },
  resend: {
    color: "#075eec",
    fontWeight: "bold",
  },
});
