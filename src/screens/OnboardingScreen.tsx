import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  // Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../config/RouteConfig';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Find New Friends',
    description: 'Discover and connect with new people nearby.',
    // image: require('../assets/onboarding1.png'),
  },
  {
    id: '2',
    title: 'Chat Instantly',
    description: 'Send messages and enjoy real-time chatting.',
    // image: require('../assets/onboarding2.png'),
  },
  {
    id: '3',
    title: 'Enjoy the Experience',
    description: 'Have fun and build new connections effortlessly.',
    // image: require('../assets/onboarding3.png'),
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
      />

      {/* Pagination dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Button */}
      {currentIndex === slides.length - 1 ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#bbb',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#6200ee',
    width: 16,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
