'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, AsyncStorage} from "react-native";

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import Icon from 'react-native-vector-icons/Ionicons';
import MKSpinner from "../Component/MKSpinner";
import { doPost } from "../Component/MKActions";

export default class HomeScreen extends Component {

	static navigationOptions = { title: 'Welcome', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			isCancelable : true,
			height : height,
			width : width,
			inputMobileNumber : '',
			inputPassword : ''
		};
		this.navigate=this.props.navigation.navigate;
	}

	async componentDidMount() {
		var that = this;
		var username = await AsyncStorage.getItem("username");
		var password = await AsyncStorage.getItem("password");
		
		if(username != null && password != null){
			var postJson = new FormData();
			postJson.append("username", username);
			postJson.append("password", password);
			var subUrl = "getLoginFromApps";

			that.setState({isLoading : true});
			var response = await doPost(subUrl, postJson);
			if(response != null){				
				var active = response['active'];
				var name = response['name'];
				var lastlogin = response['lastlogin']; 
				var img = response['img'];
				if(active!=null && (active == "active" ||  active == "InActive")){
					
					await AsyncStorage.setItem('active', active); 
					await AsyncStorage.setItem('name', name);
					await AsyncStorage.setItem('lastlogin', lastlogin); 
					await AsyncStorage.setItem('img', img);

					setTimeout(function(){ 
						that.setState({isLoading : false}); 
						that.onPressRedirect("Dashboard");
					}, 1000);
				} else if(active == "InActive"){
					setTimeout(function(){ 
						that.setState({isLoading : false}); 
						alert("Your Profile was not activated!");
					}, 1000);
				} else {
					setTimeout(function(){ 
						that.setState({isLoading : false}); 
						alert("Username/Password is incorrect");
					}, 1000);
				}
			}
		}

	}

	onPressRedirect(routes){
		this.navigate(routes);
	}

	updateLayout(){
		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});
	}

	onPressRedirect(routes){
		this.navigate(routes);
	}

	render() { 
		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;
    		return ( 
			<View style={[{height : this.state.height, flex: 1, width : layoutWidth, justifyContent :'center', alignItems:'center', backgroundColor:'#59C2AF'}]} onLayout={()=> this.updateLayout()}>
				<View style={{flexDirection: 'row', backgroundColor: '#FFF', width: 100, height: 100, justifyContent:'center', alignItems: 'center', marginBottom : 40, borderRadius: 40}}>
					<Text style={{fontFamily : 'FerroRosso', color: '#F9CE0D', fontSize: 50}}>Os</Text>
					<Text style={{fontFamily : 'FerroRosso', color: '#489FDF', fontSize: 50}}>s</Text>
				</View>

				<View style={{flexDirection: 'row'}}>
					<Text style={{fontFamily : 'FerroRosso', color: '#F9CE0D', fontSize: 50}}>1step</Text>
					<Text style={{fontFamily : 'FerroRosso', color: '#FFFFFF', fontSize: 50}}>shop</Text>
				</View>
				<View style={{flexDirection: 'row', paddingTop:5}}>
					<Text style={{fontFamily : 'FontAwesome', color: '#100000', fontSize: 12}}>SELL </Text>
					<Text style={{fontFamily : 'FontAwesome', color: '#100000', fontSize: 12}}>| BUY </Text>
					<Text style={{fontFamily : 'FontAwesome', color: '#100000', fontSize: 12}}>| EXCHANGE </Text>
					<Text style={{fontFamily : 'FontAwesome', color: '#100000', fontSize: 12}}>| ADVERTISE</Text>
				</View>
				<View style={{flexDirection: 'row', paddingTop:40}}>
				<MKButton onPress={()=> this.onPressRedirect('Login')} style={{backgroundColor : '#489FDF', borderColor: 'red', height:60, marginRight: 5, width: 120}} textStyle={{color: '#FFF'}}>
					<Icon name="ios-log-in-outline" color="#FFF" size={22} /> LOGIN
				</MKButton>
				<MKButton onPress={()=> this.onPressRedirect('Signup')} style={{backgroundColor : 'orange', borderColor: 'red', height:60, marginLeft: 5, width: 120}} textStyle={{color: '#FFF'}}>
					<Icon name="md-log-in" color="#FFF" size={22} /> SIGN UP
				</MKButton>

				</View>
				<MKSpinner visible={this.state.isLoading} cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} />
			</View>
		);
	}
}

