import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Hello World!!</Text>
          <Button
            onPress={() => {
              this.props.navigation.navigate('test');
            }}
            title={'Go to Test'}
          />
        </View>
      </>
    );
  }
}
class Test extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Hello World!!</Text>
          <Button
            onPress={() => {
              this.props.navigation.navigate('home');
            }}
            title={'Go to Home'}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigation = createStackNavigator(
  {
    home: App,
    test: Test,
  },
  {
    initialRouteName: 'home',
  },
);

export default createAppContainer(AppNavigation);
