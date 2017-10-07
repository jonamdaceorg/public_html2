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
import AdsCategoryMain from "./Templates/AdsCategoryMain";

const SimpleApp = StackNavigator(
{
	Home: { 
		screen: HomeScreen,
	},
	AdsCategoryMain: { 
		screen: AdsCategoryMain,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Three',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Ads Category',
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

