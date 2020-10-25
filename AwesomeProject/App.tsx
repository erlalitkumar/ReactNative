import React from 'react';
import {StyleSheet} from 'react-native';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action: {type: any}) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREMENT_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(logger));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
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
