import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import Search from './src/screens/SearchScreen';

const initialState = {};
const reducer = (state = initialState, action: {type: any}) => {
  switch (action.type) {
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(logger));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
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
