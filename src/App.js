import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { compose } from 'lodash/fp';

import AppNavigatorGuard from './components/Navigation/AppNavigatorGuard';

import withProvider from './lib/withProvider';
import { isAndroid } from './lib/envHelper';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

if (isAndroid) {
  SafeAreaView.setStatusBarHeight(StatusBar.currentHeight);
}

const RootComponent = compose(withProvider)(AppNavigatorGuard);

const App = () => (
  <View style={styles.root}>
    <RootComponent {...this.props} />
  </View>
);

export default App;
