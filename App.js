import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from './component/button';
import { Colors } from './utils/colors';
import Content from './content'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {calculateNumber} from './reducers/reducers'

export default function App() {
  const store = createStore(calculateNumber);
  return (
    <Provider store={store}>
      <View style={styles.container}>
            <Content/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FB',
  },
});
