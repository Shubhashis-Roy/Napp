import React from 'react';
// import AppNavigation from './src/navigation/AppNavigation';
import AppNavigation from './src/navigation/AppNavigation';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { RootSiblingParent } from 'react-native-root-siblings';

enableScreens();

const App = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      2
      <RootSiblingParent>
        <AppNavigation />
      </RootSiblingParent>
    </>
  );
};

export default App;
