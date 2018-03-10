import React from 'react';
import {
	AppRegistry,
	Text,
	View,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Menu from "./Component/menu/Menu";
import Login from "./Templates/Login";
import ForgotPassword from "./Templates/ForgotPassword";
import HomeScreen from "./Templates/HomeScreen";
import Signup from "./Templates/Signup";
import Dashboard from "./Templates/Dashboard";
import SearchHistory from "./Templates/SearchHistory";
import Search from "./Templates/Search";
import AdsView from "./Templates/AdsView";
import SearchAdsContent from "./Templates/SearchAdsContent";
import AdsGallery from "./Templates/AdsGallery";
//import AdsPost from "./Templates/AdsPost";
import AdPostPageOne from "./Templates/AdPostPageOne";
import AdPostPageTwo from "./Templates/AdPostPageTwo";

const SimpleApp = StackNavigator(
	{
		AdPostPageOne: {
			screen: AdPostPageOne,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Three',
				tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
				title: 'Post You Ads',
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
		AdPostPageTwo: {
			screen: AdPostPageTwo,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Three',
				tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
				title: 'Ads Post Step - 2',
				headerStyle: { backgroundColor: 'orange' },
				headerTintColor: '#fff',
				//headerRight: <Text navigation={navigation} >test</Text>
			})
		},		
		/*AdsPost: {
			screen: AdsPost,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'Three',
				tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
				title: 'AdsPost',
				headerStyle: { backgroundColor: 'orange' },
				headerTintColor: '#fff',
				//headerRight: <Text navigation={navigation} >test</Text>
			})
		},*/
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
		AdsGallery: {
			screen: AdsGallery,
			navigationOptions: ({ navigation }) => ({
				tabBarLabel: 'AdsGallery',
				tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={35} color={tintColor} />,
				title: 'AdsGallery',
				headerStyle: { backgroundColor: 'orange' },
				headerTintColor: '#fff',
				//headerRight: <Text navigation={navigation} >test</Text>
			})
		},
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
				headerRight: <TouchableOpacity onPress={()=> {
					AsyncStorage.setItem('userid', ""); AsyncStorage.setItem('userCode', "");
					AsyncStorage.setItem('active', ""); AsyncStorage.setItem('name', "");
					AsyncStorage.setItem('lastlogin', ""); AsyncStorage.setItem('img', "");
					AsyncStorage.setItem('username', "");
					AsyncStorage.setItem('password', "");
					navigation.navigate("Login");
				}}>
					<View
						style={{ justifyContent : 'center', padding: 10}}>
						<Icon name='sign-out' color='#FFF' size={25}/>
					</View>
				</TouchableOpacity>,
				headerLeft: <TouchableOpacity onPress={()=> {
					navigation.navigate("AdPostPageOne");
				}}>
					<View
						style={{ justifyContent : 'center', padding: 10}}>
						<Icon name='bars' color='#FFF' size={25}/>
					</View>
				</TouchableOpacity>,
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

const easyRNRoute = DrawerNavigator({
		HomeScreen: {
			screen: HomeScreen,
		},
		Stack: {
			screen: SimpleApp
		}
	}, {
		contentComponent: Menu,
		contentOptions: {
		activeTintColor: "#e91e63",
		style: {
			flex: 1,
			paddingTop: 15,
		}
	}
});
AppRegistry.registerComponent('OneStepShop', () => SimpleApp);
