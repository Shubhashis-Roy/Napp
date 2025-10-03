import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ✅ add this

const users = [
  { id: '1', name: 'Emma', age: 24, bio: 'Loves traveling 🌍 and photography 📸', image: 'https://i.pravatar.cc/400?img=11' },
  { id: '2', name: 'Liam', age: 27, bio: 'Coffee enthusiast ☕ | Developer 👨‍💻', image: 'https://i.pravatar.cc/400?img=12' },
  { id: '3', name: 'Sophia', age: 22, bio: 'Fitness 💪 | Music 🎶 | Foodie 🍔', image: 'https://i.pravatar.cc/400?img=13' },
  { id: '4', name: 'Noah', age: 29, bio: 'Hiker ⛰️ | Reader 📚 | Dreamer ✨', image: 'https://i.pravatar.cc/400?img=14' },
  { id: '5', name: 'Emma', age: 24, bio: 'Loves traveling 🌍 and photography 📸', image: 'https://i.pravatar.cc/400?img=11' },
  { id: '6', name: 'Liam', age: 27, bio: 'Coffee enthusiast ☕ | Developer 👨‍💻', image: 'https://i.pravatar.cc/400?img=12' },
  { id: '7', name: 'Sophia', age: 22, bio: 'Fitness 💪 | Music 🎶 | Foodie 🍔', image: 'https://i.pravatar.cc/400?img=13' },
  { id: '8', name: 'Noah', age: 29, bio: 'Hiker ⛰️ | Reader 📚 | Dreamer ✨', image: 'https://i.pravatar.cc/400?img=14' },
];

export default function BrowseScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>(); // ✅ navigation hook
  const cardWidth = (width - 36) / 2; 

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Profile", { user: item })} // ✅ pass user data
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.name}>{item.name}, {item.age}</Text>
          <Text style={styles.bio} numberOfLines={2}>{item.bio}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.header}>✨ Suggested Profiles</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, paddingTop:"10%" },
  header: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 16,
    textAlign: 'center',
    color: '#222',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    height: 260,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#eee',
    elevation: 5,
  },
  image: { flex: 1, justifyContent: 'flex-end' },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 2,
  },
  bio: { fontSize: 12, color: '#ddd' },
});
