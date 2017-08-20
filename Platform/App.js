import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from "./Templates/Login";
import ForgotPassword from "./Templates/ForgotPassword";

class HomeScreen extends React.Component {
static navigationOptions = { title: 'Welcome', header: null };
  render() {
    const { navigate } = this.props.navigation;
    return <View>
        <Text>Hello, Chat App!</Text>
        <TouchableOpacity
          onPress={() => navigate('Login')}
          title="Chat with Lucy"
        ><Text>Hello, Chat App!</Text></TouchableOpacity>
      </View>;
  }
}

const SimpleApp = StackNavigator(
{
	Home: { 
		screen: HomeScreen,
	},
  	Login: {
		screen: Login,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Three',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Login',
			headerStyle: { backgroundColor: 'orange' },
			headerTintColor: '#fff',
			//headerRight: <Text navigation={navigation} >test</Text>
		})
	},
	ForgotPassword: { 
		screen: ForgotPassword,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Three',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Forgot Password',
			headerStyle: { backgroundColor: 'orange' },
			headerTintColor: '#fff',
			//headerRight: <Text navigation={navigation} >test</Text>
		})

	},
},
{ 
    headerMode: 'screen' 
}
);

AppRegistry.registerComponent('OneStepShop', () => SimpleApp);

