import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import AppNavigator from './AppNavigator';

const AppNavigatorGuard = () => {
  return (
    <React.Fragment>
      <StatusBar translucent backgroundColor="transparent" />
      <AppNavigator />
    </React.Fragment>
  );
};

export default AppNavigatorGuard;
