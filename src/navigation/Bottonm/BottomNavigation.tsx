import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RouteName from "../../config/RouteConfig";

// Screens
import BrowseScreen from "../../screens/BrowseScreen";
import ChatScreen from "../../screens/ChatScreen";
import ServiceScreen from "../../screens/ServiceScreen"; // ✅ updated Service screen
import MyProfileScreen from "../../screens/MyProfile";

// Colors
import { COLORS } from "../../const/colors";

// Vector Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// TabBar Label component
import TabBarLabel from "./components/TabBarLabels";

const Bottom = createBottomTabNavigator();

/**
 * Reusable tabBarLabel
 */
const renderLabel =
  (title: string) =>
  ({ focused }: { focused: boolean }) =>
    <TabBarLabel focused={focused} title={title} />;

/**
 * Reusable tabBarIcon
 */
const renderIcon =
  (focusedIcon: string, defaultIcon: string) =>
  ({ focused }: { focused: boolean }) =>
    (
      <Ionicons
        name={focused ? focusedIcon : defaultIcon}
        size={24}
        color={focused ? COLORS.PRIMARY : COLORS.GREY}
      />
    );

const BottomNavigation = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          backgroundColor: "#fff",
        },
      }}
    >
      {/* ✅ Browse as Home */}
      <Bottom.Screen
        name={RouteName.BROWSE_SCREEN}
        component={BrowseScreen}
        options={{
          tabBarLabel: renderLabel("Browse"),
          tabBarIcon: renderIcon("home", "home-outline"),
        }}
      />

      {/* ✅ Chat */}
      <Bottom.Screen
        name={RouteName.CHAT_SCREEN}
        component={ChatScreen}
        options={{
          tabBarLabel: renderLabel("Chat"),
          tabBarIcon: renderIcon("chatbubble", "chatbubble-outline"),
        }}
      />

      {/* ✅ Services */}
      <Bottom.Screen
        name={RouteName.SERVICE_SCREEN}
        component={ServiceScreen}
        options={{
          tabBarLabel: renderLabel("Services"),
          tabBarIcon: renderIcon("briefcase", "briefcase-outline"), // changed icon to represent services
        }}
      />

      {/* ✅ Profile */}
      <Bottom.Screen
        name={RouteName.MY_PROFILE_SCREEN}
        component={MyProfileScreen}
        options={{
          tabBarLabel: renderLabel("Profile"),
          tabBarIcon: renderIcon("person", "person-outline"),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;
