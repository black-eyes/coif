import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClientNavigator from './navigation/ClientNavigator'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!22222</Text>
    // </View>
    <ClientNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
