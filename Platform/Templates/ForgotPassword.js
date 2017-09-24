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
			inputMobileNumber : '8344798628',
			otpStatus : 0,
			otpMessage: '',
			otpText : ''
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

				that.setState({
					otpStatus : response['status'],
					otpMessage: response['message'],
					otpText : response['otp']
				});
				that.setState({isLoading : false}); 
				//alert(that.state.otpStatus + "" + that.state.otpText);				
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

		var inputOtpError = null;
		if(this.state.errorsJson.inputOtp != null){
			inputOtpError = <Text style={CommonStyle.errorText}>{this.state.errorsJson.inputOtp}</Text>;
		}

		//Error Block Code end
		var editableMobile = true;
		var otpContent = null;
		var dynamicBtn = <MKButton onPress={()=> this.confirmUserAndSendOtp()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>
				SEND OTP
			</MKButton>;

		if(this.state.otpStatus == '1' ){
			editableMobile = false;

			otpContent = <View>
					<MKTextInput label={'OTP'} highlightColor={inputHighlightColor}
						onChangeText={(inputOtp) => this.updateMyState(inputOtp, 'inputOtp')}
						value = {this.state.inputOtp}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
						keyboardType={'numeric'} maxLength={6} returnKeyType={'go'} ref="inputOtp" 
						onSubmitEditing={(event) => this.confirmUserAndSendOtp()}
						onFocus={()=>this.onFocus()}
						/>
						{ inputOtpError }

					<View style={{paddingTop: 30}}></View>
					<Text style={[CommonStyle.errorText, {textAlign : 'right', textDecorationLine: 'underline'}]} onPress={()=> this.confirmUserAndSendOtp()}>Re-Send OTP?</Text>
					</View>;
			dynamicBtn = <MKButton onPress={()=> this.confirmUserAndSendOtp()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>
				VERIFY OTP
			</MKButton>;
		} else if(this.state.otpStatus == '2' ){
			otpContent = <Text style={CommonStyle.errorText}>{this.state.otpMessage}</Text>;
		}
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
						editable={editableMobile}
						/>
						{ inputMobileNumberError }

					<View style={{paddingTop: 30}}></View>
					{otpContent}
				</View>
			</ScrollView>
			{dynamicBtn}
       			<MKSpinner visible={this.state.isLoading} cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} updateParentState={this.updateState.bind(this)}/>
		</View>
		);
	}
}
