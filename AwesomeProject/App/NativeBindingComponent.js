// @flow
import * as React from 'react';
import {View, Button, NativeModules} from 'react-native';

const {ToastModule} = NativeModules;

export default class NativeBindingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  const
  clicked = async () => {
    const greet = await ToastModule.getGreetings();
    console.log('button clicked :' + greet);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => this.clicked()} title={'show toast'} />
      </View>
    );
  }
}
