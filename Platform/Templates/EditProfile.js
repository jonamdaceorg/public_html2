'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions} from "react-native";
import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";

export default class EditProfile extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			inputName : '',
			inputEmail : '',
			inputMobileNumber : ''
		};
	}

	componentDidMount() {

	}

	editMyProfile(){
		var inputEmailValue = this.state.inputEmail;
		var inputMobileNumberValue = this.state.inputMobileNumber;
		var inputNameValue = this.state.inputName;

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
		var inputWidth = this.state.width - 30;
		var inputHeight = 38;
		var inputFontSize = 16;
		var inputHighlightColor = "#00BCD4";
		return (
		      	<View style={{flex: 1}}>
				<ScrollView onLayout={()=>this.updateLayout()} >

					<MKTextInput label={'Name'} highlightColor={inputHighlightColor} 
						onChangeText={(inputName) => this.updateMyState(inputName, 'inputName')}
						value = {this.state.inputName}
						inputStyle={{fontSize: inputFontSize, height: inputHeight, width: inputWidth }} />

					<MKTextInput label={'Mobile Number'} highlightColor={inputHighlightColor}
						onChangeText={(inputMobileNumber) => this.updateMyState(inputMobileNumber, 'inputMobileNumber')}
						value = {this.state.inputMobileNumber}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}} />

					<MKTextInput label={'Email'} highlightColor={inputHighlightColor}  
						onChangeText={(inputEmail) => this.updateMyState(inputEmail, 'inputEmail')}
						value = {this.state.inputEmail}
						inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}} />
					<View style={{paddingTop: 30}}></View>
					<MKButton isLoading={this.state.isLoading} onPress={()=> this.editMyProfile()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF'}} textStyle={{color: '#FFF'}} activityIndicatorColor={'#FFF'} btndisabled={this.state.isLoading}>
						UPDATE PROFILE
					</MKButton>

				</ScrollView>
			</View>
		);
	}
}
