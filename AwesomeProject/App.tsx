import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class App extends React.Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Button
          title={'GO to Test'}
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    );
  }
}

class Test extends React.Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Button
          title={'GO to Test'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigation = createStackNavigator(
  {
    Home: App,
    Test: Test,
  },
  {
    initialRouteName: 'Home',
  },
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigation);
