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
import HomeScreen from "./Templates/HomeScreen";
import Signup from "./Templates/Signup";
import MyAccount from "./Templates/MyAccount";

const SimpleApp = StackNavigator(
{
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
	MyAccount: { 
		screen: MyAccount,
	},
	Signup : {
		screen: Signup,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Three',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Sign Up',
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

