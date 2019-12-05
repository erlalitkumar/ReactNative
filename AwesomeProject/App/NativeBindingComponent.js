// @flow
import * as React from 'react';
import {View, Button, NativeModules} from 'react-native';
const {ToastModule} = NativeModules;

export default class NativeBindingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => {
            ToastModule.showText(
              'This is an Android Native Toast',
              ToastModule.LENGTH_SHORT,
            );
            console.log('button clicked');
          }}
          title={'show toast'}
        />
      </View>
    );
  }
}
