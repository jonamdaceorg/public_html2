'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity} from "react-native";

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";

export default class Login extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			errorsJson:{
				inputMobileNumber : null,
				inputPassword : null							
			},
			inputMobileNumber : '',
			inputPassword : ''
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
		//alert(JSON.stringify(this.state.errorsJson));
	}

	componentDidMount() {

	}

	getLogin(){
		var inputMobileNumberValue = this.state.inputMobileNumber;
		var inputPassword = this.state.inputPassword;
		var isValid = 1;
		var stateArray = this.state;
		var errorsJson = this.state.errorsJson;
		Object.keys(errorsJson).forEach(function(key) {
			var stateArrayValue = stateArray[key];
			if(stateArrayValue == null || stateArrayValue==""){
				errorsJson[key] = "This field is required";
				isValid = 0;
			}
			//isValid +=  "stateArrayValue : "+stateArrayValue + " stateArrayKey : "+key
		});
		//alert(isValid+JSON.stringify(errorsJson));
		if(isValid == 1){

		}

		//alert(this.state.inputEmail + "test"+ this.state.inputMobileNumber);
		/*if(isValid!=null){
			if(!this.state.isLoading){
				this.setState({isLoading : true});
			} else {
				this.setState({isLoading : false});
			}
		}*/
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

	render() { 
		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;
		var inputHeight = 38;
		var inputFontSize = 16;
		var inputHighlightColor = "#00BCD4";
		return (
		<View style={[{height : this.state.height, flex: 1, width : layoutWidth}]} onLayout={()=> this.updateLayout()}>
			<ScrollView >
		      		<View style={{flex: 1, width:inputWidth, alignSelf:'center'}}>

					<MKTextInput label={'Mobile Number'} highlightColor={inputHighlightColor}
						onChangeText={(inputMobileNumber) => this.updateMyState(inputMobileNumber, 'inputMobileNumber')}
						value = {this.state.inputMobileNumber}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
						keyboardType={'numeric'} maxLength={10} returnKeyType={'next'} ref="inputMobileNumber" 
						onSubmitEditing={(event) => this.focusNextField('inputPassword')}
						onFocus={()=>this.onFocus()}
						/>

					<MKTextInput label={'Password'} highlightColor={inputHighlightColor}  
						onChangeText={(inputPassword) => this.updateMyState(inputPassword, 'inputPassword')}
						value = {this.state.inputPassword}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
						secureTextEntry={true} returnKeyType={'go'} ref="inputPassword"
						onFocus={()=>this.onFocus()}
						/>
					<View style={{paddingTop: 30}}></View>
					<TouchableOpacity onPress={()=> this.onPressRedirect('ForgotPassword')}>					
						<Text style={{textAlign:'right', color: '#60AAC6', fontSize: 14}}>FORGOT PASSWORD?</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<MKButton isLoading={this.state.isLoading} onPress={()=> this.getLogin()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>
				LOGIN
			</MKButton>
		</View>
		);
	}
}
