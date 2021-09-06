import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BrowseScreen from '../../screens/BrowseScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Browse" component={BrowseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
