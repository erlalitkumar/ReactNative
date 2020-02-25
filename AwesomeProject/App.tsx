import React from 'react';
import {StyleSheet} from 'react-native';
import Counter from './src/Counter';

export default class App extends React.Component {
  render() {
    return <Counter />;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
