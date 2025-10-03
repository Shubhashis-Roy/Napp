import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
}

const chats: ChatItem[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:45 AM',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Emma Watson',
    lastMessage: 'See you tomorrow',
    time: '09:20 AM',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Michael Smith',
    lastMessage: 'Typing...',
    time: 'Yesterday',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export default function ChatListScreen({ navigation }: any) {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        navigation.navigate('OnChat', {
          userId: item.id,
          name: item.name,
          avatar: item.avatar,
        })
      }
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* ✅ Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <View style={styles.headerIcons}>
          <Ionicons
            name="search-outline"
            size={22}
            color="#007AFF"
            style={styles.icon}
          />
          <Ionicons name="create-outline" size={22} color="#007AFF" />
        </View>
      </View>

      {/* ✅ Chat List */}
      <FlatList
        contentContainerStyle={{ paddingTop: 12 }}
        data={chats}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },

  // Header
  header: {
    height: '13%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  headerTitle: { fontSize: 20, top: '10%', fontWeight: '700', color: '#000' },
  headerIcons: { flexDirection: 'row', top: '10%' },
  icon: { marginRight: 18 },

  // Chat item
  chatItem: {
    flexDirection: 'row',
    padding: 14,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27,
    marginRight: 12,
  },
  chatInfo: { flex: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 16, fontWeight: '600', color: '#000' },
  time: { fontSize: 12, color: '#999' },
  lastMessage: { fontSize: 14, color: '#666', marginTop: 4 },

  separator: { height: 1, backgroundColor: '#eee', marginLeft: 80 },
});
