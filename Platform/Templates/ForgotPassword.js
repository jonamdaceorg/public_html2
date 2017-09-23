'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, AsyncStorage} from "react-native";

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import { doPost } from "../Component/MKActions";
import MKSpinner from "../Component/MKSpinner";

export default class Login extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			isCancelable : true,
			height : height,
			width : width,
			errorsJson:{
				inputMobileNumber : null
			},
			inputMobileNumber : ''
		};
		this.navigate=this.props.navigation.navigate;
		this.onFocus = this.onFocus.bind(this);
		this.focusNextField = this.focusNextField.bind(this);
	}

	focusNextField(nextField) {
		this.refs[nextField].focus(); 
	}

	onFocus() {
		let errorsJson = this.state.errorsJson; 
		var that = this;
		for (let name in errorsJson) {
			let ref = this.refs[name];
			if (ref && ref.isFocused()) {
				errorsJson[name] = null;
			}
		}
		that.updateMyState(errorsJson, 'errorsJson');
	}

	componentDidMount() {

	}

	async confirmUserAndSendOtp(){
		var that = this;
		var inputMobileNumberValue = that.state.inputMobileNumber;
		var isValid = 1;
		var stateArray = that.state;
		var errorsJson = that.state.errorsJson;
		Object.keys(errorsJson).forEach(function(key) {
			var stateArrayValue = stateArray[key];
			if(stateArrayValue == null || stateArrayValue==""){
				errorsJson[key] = "This field is required";
				isValid = 0;
			}  else if( key == 'inputMobileNumber' && stateArrayValue.length!=10){
				errorsJson[key] = "Length should not be less than 10";
				isValid = 0;
			} else if( key == 'inputMobileNumber' && isNaN(stateArrayValue)){
				errorsJson[key] = "Invalid Mobile Number";
				isValid = 0;
			} else {
				errorsJson[key] = null;
			}
		});
		await that.updateMyState(errorsJson, 'errorsJson');
		if(isValid == 1){
			var postJson = new FormData();
			postJson.append("mobileNumber", that.state.inputMobileNumber);
			var subUrl = "confirmUserAndSendOtpFromApps";
			that.setState({isLoading : true});
			var response = await doPost(subUrl, postJson);
			if(response != null){				
				/*var active = response['active'];
				if(active!=null && (active == "active" ||  active == "InActive")){
					var userid = response['userid']; var userCode = response['userCode']; var name = response['name'];
					var lastlogin = response['lastlogin']; var img = response['img'];
					await AsyncStorage.setItem('userid', userid); await AsyncStorage.setItem('userCode', userCode);
					await AsyncStorage.setItem('active', active); await AsyncStorage.setItem('name', name);
					await AsyncStorage.setItem('lastlogin', lastlogin); await AsyncStorage.setItem('img', img);

					await AsyncStorage.setItem('username', that.state.inputMobileNumber);

					setTimeout(function(){ 
						that.setState({isLoading : false}); 
						that.onPressRedirect("MyAccount");
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
				}*/
			}
		}
	}

	updateMyState(value, keyName){
		this.setState({
			[keyName] : value
		});
	}

	updateLayout(){
		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});
	}

	onPressRedirect(routes){
		this.navigate(routes);
	}

 updateState (data) {
        this.setState(data);
    }

	render() { 
		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;
		var inputHeight = 38;
		var inputFontSize = 16;
		var inputHighlightColor = "#00BCD4";

		//Error Block Code start
		var inputMobileNumberError = null;
		if(this.state.errorsJson.inputMobileNumber != null){
			inputMobileNumberError = <Text style={CommonStyle.errorText}>{this.state.errorsJson.inputMobileNumber}</Text>;
		}
		//Error Block Code end

		return (
		<View style={[{height : this.state.height, flex: 1, width : layoutWidth}]} onLayout={()=> this.updateLayout()}>
			<ScrollView >
		      		<View style={{flex: 1, width:inputWidth, alignSelf:'center'}}>

					<MKTextInput label={'Mobile Number'} highlightColor={inputHighlightColor}
						onChangeText={(inputMobileNumber) => this.updateMyState(inputMobileNumber, 'inputMobileNumber')}
						value = {this.state.inputMobileNumber}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
						keyboardType={'numeric'} maxLength={10} returnKeyType={'go'} ref="inputMobileNumber" 
						onSubmitEditing={(event) => this.confirmUserAndSendOtp()}
						onFocus={()=>this.onFocus()}
						/>
						{ inputMobileNumberError }

					<View style={{paddingTop: 30}}></View>
				</View>
			</ScrollView>
			<MKButton onPress={()=> this.confirmUserAndSendOtp()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>
				SEND OTP
			</MKButton>
       			<MKSpinner visible={this.state.isLoading} cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} updateParentState={this.updateState.bind(this)}/>
		</View>
		);
	}
}
