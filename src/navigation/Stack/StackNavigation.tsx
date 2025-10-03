import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// configs
import RouteName from '../../config/RouteConfig';

// Screens
import SplashScreen from '../../screens/SplashScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import LoginScreen from '../../screens/LoginScreen';
import OtpScreen from '../../screens/OtpScreen';
import BottomNavigation from '../Bottonm/BottomNavigation';
import ProfileScreen from '../../screens/ProfileScreen';
import OnChatScreen from '../../screens/OnChatScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {/* Splash screen */}
      <Stack.Screen
        name={RouteName.SPLASH}
        component={SplashScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* OnBoarding screen */}
      <Stack.Screen
        name={RouteName.ONBOARDING}
        component={OnboardingScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* Login screen */}
      <Stack.Screen
        name={RouteName.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* Otp screen */}
      <Stack.Screen
        name={RouteName.OTP_SCREEN}
        component={OtpScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* Bottom Navigation (Browse is Home now) */}
      <Stack.Screen
        name={RouteName.BOTTOM_NAVIGATION}
        component={BottomNavigation}
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* Profile */}
      <Stack.Screen
        name={RouteName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: 'Profile',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* OnChat screen */}
      <Stack.Screen
        name="OnChat"
        component={OnChatScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
