'use strict';
import React, {Component, PropTypes} from "react";
import {
	View, 
	ToastAndroid, 
	StyleSheet, 
	Animated, 
	Text, 
	TextInput, 
	ScrollView, 
	Dimensions, 
	TouchableOpacity, 
	Image, 
	ListView, 
	AsyncStorage
	} from "react-native";
import MKTextInput from "../Component/MKTextInput";
export default class SearchInput extends Component {
	static navigationOptions = { title: 'Welcome', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			errorsJson:{
				inputName : null,
				inputEmail : null,
				inputMobileNumber : null,
				inputPassword : null
			},
			inputName : '',
			inputEmail : '',
			inputMobileNumber : '',
			inputPassword : ''
		};
		this.focusNextField = this.focusNextField.bind(this);
	}


	focusNextField(nextField) {
		this.refs[nextField].focus(); 
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

<TextInput value={'yghghghghjghghghgjh'} style={{width:200}}/>

		);
	}
}
