import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ServiceScreen() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: "1",
      name: "Spa",
      price: "₹1500",
      description: "Relaxing spa session to refresh your body & mind.",
      benefits: "Full body massage, aromatherapy oils, 60 mins session",
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      id: "2",
      name: "Partner for Night Club",
      price: "₹2000",
      description: "Enjoy a fun night out with a reliable party partner.",
      benefits: "Dance partner, safe return, fun vibes guaranteed",
      image: "https://picsum.photos/400/200?random=2",
    },
    {
      id: "3",
      name: "Partner for Long Drive",
      price: "₹2500",
      description: "Perfect company for your long scenic drives.",
      benefits: "Music, conversations, and adventure partner",
      image: "https://picsum.photos/400/200?random=3",
    },
    {
      id: "4",
      name: "Partner for Indoor Games",
      price: "₹1000",
      description: "Play and compete in fun indoor games with a partner.",
      benefits: "Chess, Ludo, Cards, Carrom board fun",
      image: "https://picsum.photos/400/200?random=4",
    },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedService(item)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  // ✅ Service Details
  if (selectedService) {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <ScrollView style={styles.detailContainer}>
          <Image
            source={{ uri: selectedService.image }}
            style={styles.detailImage}
          />
          <View style={styles.detailContent}>
            <Text style={styles.detailName}>{selectedService.name}</Text>
            <Text style={styles.detailPrice}>{selectedService.price}</Text>
            <Text style={styles.detailDesc}>{selectedService.description}</Text>
            <Text style={styles.detailBenefits}>
              ✨ {selectedService.benefits}
            </Text>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => alert("Booked: " + selectedService.name)}
            >
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelectedService(null)}
            >
              <Text style={styles.backButtonText}>← Back to Services</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ✅ Default Services List
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Text style={styles.header}>Available Services</Text>
        <FlatList
          data={services}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },

  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "#222",
  },

  // Card
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  image: { width: "100%", height: 160 },
  cardContent: { padding: 12 },
  name: { fontSize: 18, fontWeight: "700", color: "#000" },
  description: { fontSize: 14, color: "#555", marginVertical: 6 },
  price: { fontSize: 16, fontWeight: "600", color: "#007AFF" },

  // Detail screen
  detailContainer: { flex: 1, backgroundColor: "#fff" },
  detailImage: { width: "100%", height: 250 },
  detailContent: { padding: 16 },
  detailName: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    color: "#222",
  },
  detailPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 12,
  },
  detailDesc: { fontSize: 16, color: "#555", marginBottom: 10, lineHeight: 22 },
  detailBenefits: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    marginBottom: 20,
  },

  // Buttons
  bookButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  bookButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  backButton: { alignItems: "center", marginTop: 10 },
  backButtonText: { fontSize: 16, color: "#007AFF", fontWeight: "500" },
});
