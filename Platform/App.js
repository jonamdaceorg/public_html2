import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';

import Login from "./Templates/Login";
import ForgotPassword from "./Templates/ForgotPassword";
import HomeScreen from "./Templates/HomeScreen";
import Signup from "./Templates/Signup";
import Dashboard from "./Templates/Dashboard";
import SearchHistory from "./Templates/SearchHistory";
import Search from "./Templates/Search";
import AdsView from "./Templates/AdsView";
import SearchAdsContent from "./Templates/SearchAdsContent";

const SimpleApp = StackNavigator(
{
	Search: { 
		screen: Search,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Search',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Ads List',
			headerStyle: { backgroundColor: 'orange' },
			headerTintColor: '#fff',
			//headerRight: <Text navigation={navigation} >test</Text>
		})
	},
	Dashboard: { 
		screen: Dashboard,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Three',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Category',
			headerStyle: { backgroundColor: 'orange' },
			headerTintColor: '#fff',
			//headerRight: <Text navigation={navigation} >test</Text>
		})
	},
	SearchHistory: { 
		screen: SearchHistory,
	},
	AdsView: { 
		screen: AdsView,
		navigationOptions: ({ navigation }) => ({
			tabBarLabel: 'Three',
			tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
			title: 'Ads Details',
			headerStyle: { backgroundColor: 'orange' },
			headerTintColor: '#fff',
			//headerRight: <Text navigation={navigation} >test</Text>
		})
	},
	SearchAdsContent: { 
		screen: SearchAdsContent,
	},
	Home: { 
		screen: HomeScreen,
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

