import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Stack/StackNavigation';
import { useNavigationContainerRef } from '@react-navigation/native';

const AppNavigation = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
