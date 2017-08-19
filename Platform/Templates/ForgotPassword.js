'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions} from "react-native";
import { Container, Navbar } from 'navbar-native';

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";

export default class ForgotPassword extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			inputMobileNumber : ''
		};
	}

	componentDidMount() {

	}

	resetPassword(){
		var inputMobileNumberValue = this.state.inputMobileNumber;

		//alert(this.state.inputEmail + "test"+ this.state.inputMobileNumber);
		if(!this.state.isLoading){
			this.setState({isLoading : true});
		} else {
			this.setState({isLoading : false});
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

	render() { 
		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;
		var inputHeight = 38;
		var inputFontSize = 16;
		var inputHighlightColor = "#00BCD4";
		return (
		<View style={[{height : this.state.height, flex: 1, width : layoutWidth}]} onLayout={()=> this.updateLayout()}>
		<Navbar
		    title={"Forgot Password"}
		    bgColor={"orange"}
		    left={{
			icon: "ios-arrow-back",
			onPress: () => this.onPressRedirect('LoginScreenForCustomer')
		    }}
		    style={{height:60}}
		/>

			<ScrollView >
		      		<View style={{flex: 1, width:inputWidth, alignSelf:'center'}}>

					<MKTextInput label={'Mobile Number'} highlightColor={inputHighlightColor}
						onChangeText={(inputMobileNumber) => this.updateMyState(inputMobileNumber, 'inputMobileNumber')}
						value = {this.state.inputMobileNumber}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}} />

					<View style={{paddingTop: 30}}></View>
				</View>
			</ScrollView>
			<MKButton isLoading={this.state.isLoading} onPress={()=> this.resetPassword()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>
				RESET PASSWORD
			</MKButton>
		</View>
		);
	}
}
