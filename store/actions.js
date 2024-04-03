import AsyncStorage from "@react-native-async-storage/async-storage";
import TYPE from "./type";
import axios from "axios";
import { Alert } from "react-native";

export const login =
  (navigation, phone_number, country_code, fcm_token) => async (dispatch) => {
    try {
      const data = { phone_number, country_code, fcm_token };
      const res = await axios({
        baseURL: "https://well-alert-api.s2c.io/v1",
        method: "post",
        url: "/otp",
        headers: { "Content-Type": "application/json" },
        data,
      });
      console.log(res.data);
      Alert.alert("Success", "OTP sent to your phone");
      navigation.navigate("verifyOTP", {
        phone_number,
        country_code,
        fcm_token,
      });
      dispatch({
        type: TYPE.LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const err = error.response.data.error;
      let msg = "An error came up";
      if ("phone_number" in err) {
        msg = err.phone_number;
      }
      if (typeof err === "string") {
        msg = err;
      }
      Alert.alert("Error", msg);
      dispatch({
        type: TYPE.LOGIN_FAIL,
      });
    }
  };

export const verifyOTP =
  (navigation, phone_number, country_code, fcm_token, otp) =>
  async (dispatch) => {
    try {
      const data = { phone_number, country_code, fcm_token, otp };
      const res = await axios({
        baseURL: "https://well-alert-api.s2c.io/v1",
        method: "post",
        url: "/login",
        headers: { "Content-Type": "application/json" },
        data,
      });
      await AsyncStorage.setItem("token", res.data.token);
      Alert.alert("Success", "Welcome to WellAlert");
      navigation.navigate("notifications");
      dispatch({
        type: TYPE.VERIFY_SUCCESS,
        payload: res.data.user,
      });
    } catch (error) {
      Alert.alert("Error", error.response.data.error);
      dispatch({
        type: TYPE.VERIFY_FAIL,
      });
    }
  };

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};
