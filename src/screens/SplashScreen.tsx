import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";
import LoaderCircular from "../animations/loaderCircular.json";
import { COLORS } from "../const/colors";
import RouteName from "../config/RouteConfig";

export default function SplashScreen({ navigation }: any) {
  const scaleAnim = useRef(new Animated.Value(0)).current; // scale animation
  const opacityAnim = useRef(new Animated.Value(0)).current; // fade animation

  useEffect(() => {
    // Animate logo
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after 2.5s
    const timer = setTimeout(() => {
      navigation.navigate(RouteName.ONBOARDING as never);
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation, scaleAnim, opacityAnim]);

  return (
    <LinearGradient
      colors={[COLORS.PRIMARY, COLORS.BACKGROUND_COLOR]}
      style={styles.mainStyle}
    >
      {/* ✅ Animated Logo */}
      <Animated.View
        style={[
          styles.logoContainer,
          { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
        ]}
      >
        <Image
          source={require("../assets/nuhLogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      {/* ✅ Loader Below Logo */}
      <View style={styles.loaderContainer}>
        <LottieView
          style={{ width: 150, height: 150 }}
          source={LoaderCircular}
          autoPlay
          loop
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    marginBottom: 50,
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
  },

  loaderContainer: {
    position: "absolute",
    top: "65%",
    alignItems: "center",
  },
});
