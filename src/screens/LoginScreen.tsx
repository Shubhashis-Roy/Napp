import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RouteName from "../config/RouteConfig";
import { showToast } from "../utils/toast";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [mobileNumber, setMobileNumber] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleLogin = () => {
    if (!mobileNumber.trim()) {
      showToast("Please enter mobile number");
      return;
    }
    if (!accepted) {
      showToast("Please accept Privacy Policy & Terms");
      return;
    }
    navigation.navigate(RouteName.OTP_SCREEN, { phoneNumber: mobileNumber });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Text style={styles.title}>🔑 Login</Text>

      {/* Mobile Input */}
      <TextInput
        placeholder="Enter Mobile Number"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />

      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAccepted(!accepted)}
      >
        <Ionicons
          name={accepted ? "checkbox-outline" : "square-outline"}
          size={22}
          color={accepted ? "#007AFF" : "#999"}
        />
        <Text style={styles.checkboxText}>
          I accept{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://nuhdating.com/privacy")}
          >
            Privacy Policy
          </Text>{" "}
          and{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://nuhdating.com/terms")}
          >
            Terms & Conditions
          </Text>
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.button, !accepted && { opacity: 0.6 }]}
        onPress={handleLogin}
        disabled={!accepted}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    color: "#222",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#fafafa",
    elevation: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  checkboxText: {
    fontSize: 14,
    color: "#444",
    marginLeft: 8,
    flex: 1,
    flexWrap: "wrap",
  },
  link: {
    color: "#007AFF",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
