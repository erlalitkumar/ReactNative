import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';

const MainNevigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  }
})
const App = createAppContainer(MainNevigator)

export default App