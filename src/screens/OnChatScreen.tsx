import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

export default function OnChatScreen() {
  const route = useRoute<any>();
  const { name, avatar } = route.params;

  const [messages, setMessages] = useState([
    { id: "1", text: "Hey there! 👋", sender: "other" },
    { id: "2", text: "How are you?", sender: "other" },
    { id: "3", text: "I’m good, thanks 😊", sender: "me" },
  ]);
  const [typedMessage, setTypedMessage] = useState("");

  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    if (!typedMessage.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      text: typedMessage,
      sender: "me",
    };
    setMessages((prev) => [newMsg, ...prev]); // inverted list = prepend
    setTypedMessage("");
  };

  const renderItem = ({ item }: any) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "me" ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === "other" && { color: "#000" },
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* ✅ Header stays fixed */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Text style={styles.headerTitle}>{name}</Text>
        </View>
        <Ionicons name="call-outline" size={22} color="#007AFF" />
      </View>

      {/* ✅ Only this part shifts with keyboard */}
      <KeyboardAvoidingView
        style={styles.flexGrow}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          inverted
          contentContainerStyle={{ padding: 12 }}
          showsVerticalScrollIndicator={false}
        />

        {/* Input Bar */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write your message..."
            placeholderTextColor="#999"
            multiline
            value={typedMessage}
            onChangeText={setTypedMessage}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            disabled={!typedMessage.trim()}
          >
            <Ionicons
              name={typedMessage.trim() ? "send" : "mic-outline"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  flexGrow: { flex: 1 },

  header: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  headerTitle: { fontSize: 18, fontWeight: "600", color: "#000" },

  messageBubble: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    maxWidth: "75%",
  },
  myMessage: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: "#E5E5EA",
    alignSelf: "flex-start",
  },
  messageText: { fontSize: 15, color: "#fff" },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    fontSize: 15,
    color: "#000",
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 30,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
