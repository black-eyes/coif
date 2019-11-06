import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import ClientNavigator from './navigation/ClientNavigator'
import productReducer from './store/reducers/Products'
import prestReducer from './store/reducers/Prestation'


const rootReducer = combineReducers ({
  product : productReducer,
  prestation : prestReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!22222</Text>
    // </View>
    <Provider store = {store}>
      <ClientNavigator/>
    </Provider>
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
