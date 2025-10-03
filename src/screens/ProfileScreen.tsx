import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const ProfileScreen = () => {
  const route = useRoute<any>();
  const { user } = route.params; // ✅ user data passed from BrowseScreen

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />

      {/* Hero Image */}
      <Image source={{ uri: user.image }} style={styles.image} />

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.name}>
          {user.name}, {user.age}
        </Text>
        <Text style={styles.bio}>{user.bio}</Text>

        {/* Interests Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>✨ Interests</Text>
          <Text style={styles.sectionText}>
            Traveling 🌍, Photography 📸, Music 🎶, Fitness 💪, Foodie 🍔
          </Text>
        </View>

        {/* Location Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📍 Location</Text>
          <Text style={styles.sectionText}>New Delhi, India</Text>
        </View>

        {/* About Me Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>👤 About Me</Text>
          <Text style={styles.sectionText}>
            I’m passionate about exploring new places and meeting people from
            different cultures. Love deep conversations over coffee ☕ and
            spontaneous adventures.
          </Text>
        </View>

        {/* Call to Action */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>💌 Connect</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 400, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  content: { padding: 20, alignItems: "center" },
  name: { fontSize: 28, fontWeight: "700", marginBottom: 6, color: "#222" },
  bio: { fontSize: 16, color: "#666", textAlign: "center", marginBottom: 20 },

  card: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 6, color: "#333" },
  sectionText: { fontSize: 15, color: "#555", lineHeight: 20 },

  button: {
    marginTop: 20,
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: { fontSize: 18, fontWeight: "700", color: "#fff" },
});
