import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

interface IState {
  counter: number;
}

interface IProps {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

class Counter extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{fontSize: 20}}>Increment</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{fontSize: 20}}>Decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch: {
  (arg0: {type: string}): void;
  (arg0: {type: string}): void;
}) {
  return {
    increaseCounter: () => dispatch({type: 'INCREMENT_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREMENT_COUNTER'}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
