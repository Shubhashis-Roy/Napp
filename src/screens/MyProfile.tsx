import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import RouteName from "../config/RouteConfig"; // ✅ adjust path to your RouteConfig

const MyProfileScreen = ({ navigation }: any) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const user = {
    name: "John Doe",
    phone: "+91 98765 43210",
    avatar: "https://i.pravatar.cc/300",
  };

  const actions = [
    { id: 1, title: "Dating Advice", icon: "heart-outline" },
    { id: 2, title: "Rating", icon: "star-outline" },
    { id: 3, title: "Report & Block", icon: "alert-circle-outline" },
    { id: 4, title: "Logout", icon: "log-out-outline", isLogout: true },
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigation.replace(RouteName.LOGIN_SCREEN); // ✅ Navigate to login
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* ✅ Profile Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.phone}>{user.phone}</Text>
          </View>
        </View>

        {/* ✅ Action Buttons */}
        <View style={{ marginTop: 10 }}>
          {actions.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.actionCard,
                item.isLogout && { backgroundColor: "#FFECEC" },
              ]}
              onPress={() => {
                if (item.isLogout) {
                  setShowLogoutModal(true);
                }
              }}
            >
              <View style={styles.actionLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    item.isLogout && { backgroundColor: "#FFD6D6" },
                  ]}
                >
                  <Ionicons
                    name={item.icon}
                    size={20}
                    color={item.isLogout ? "#FF3B30" : "#007AFF"}
                  />
                </View>
                <Text
                  style={[
                    styles.actionText,
                    item.isLogout && { color: "#FF3B30" },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={item.isLogout ? "#FF3B30" : "#999"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* ✅ Logout Confirmation Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Are you sure?</Text>
            <Text style={styles.modalText}>
              Do you really want to logout?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#FF3B30" }]}
                onPress={handleLogout}
              >
                <Text style={[styles.modalButtonText, { color: "#fff" }]}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },

  // Profile Card
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  avatar: { width: 70, height: 70, borderRadius: 35, marginRight: 15 },
  profileInfo: { flex: 1 },
  name: { fontSize: 20, fontWeight: "700", color: "#222" },
  phone: { fontSize: 15, color: "#666", marginTop: 4 },

  // Action Cards
  actionCard: {
    top:"10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  actionLeft: { flexDirection: "row", alignItems: "center" },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E6F0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  actionText: { fontSize: 16, color: "#333", fontWeight: "500" },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  modalText: { fontSize: 15, color: "#555", marginBottom: 20, textAlign: "center" },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: { fontSize: 16, fontWeight: "600" },
});
