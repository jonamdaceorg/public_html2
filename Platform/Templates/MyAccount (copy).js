'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, Image} from "react-native";

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-icon-checkbox';

export default class MyAccount extends Component {

	static navigationOptions = { title: 'Welcome', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			isChecked: false,
			isRadioSelected: true,
			height : height,
			width : width,
			inputMobileNumber : '',
			inputPassword : ''
		};
		this.navigate=this.props.navigation.navigate;
	}

	componentDidMount() {

	}

	handlePressCheckedBox = (checked) => {
	this.setState({
	isChecked: checked,
	});
	}

	handleSelectedRadionButton = (checked) => {
	this.setState({
	isRadioSelected: checked,
	});
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
			<ScrollView >
				<View style={{flexDirection: 'row', backgroundColor: '#FFF', width: 200, height: 200, justifyContent:'center', alignItems: 'center', marginBottom : 40, borderRadius: 75}}>
				<Image style={{width: 200, height: 200}} borderRadius={75} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
				</View>	
				<View style={{ backgroundColor: '#FFF', width: 200, height: 200, justifyContent:'center', alignItems: 'center', marginBottom : 40, borderRadius: 75}}>
					<Text>Name</Text>
					<Text>Mobile</Text>
					<Text>Email</Text>
				</View>	
<View style={{ backgroundColor: '#FFF', width: 200, height: 200, justifyContent:'center', alignItems: 'center', marginBottom : 40, borderRadius: 75}}>
					<Text>Name</Text>
					<Text>Mobile</Text>
					<Text>Email</Text>
				</View>	

<View style={{ backgroundColor: '#FFF', width: 200, height: 200, justifyContent:'center', alignItems: 'center', marginBottom : 40, borderRadius: 75}}>
					<Text>Name</Text>
					<Text>Mobile</Text>
					<Text>Email</Text>
				</View>	
<View style={{ backgroundColor: '#FFF', width: 200, height: 200, justifyContent:'center', alignItems: 'center', marginBottom : 40, borderRadius: 75}}>
					<Text>Name</Text>
					<Text>Mobile</Text>
					<Text>Email</Text>
				</View>	


        <CheckBox
          label="Checkbox"
          size={30}
          checked={this.state.isChecked}
          onPress={this.handlePressCheckedBox}
        />      
        <CheckBox
          label="RadioButton"
          size={30}
          checked={this.state.isRadioSelected}
          onPress={this.handleSelectedRadionButton}
          uncheckedIconName="radio-button-unchecked"
          checkedIconName="radio-button-checked"
        />


			</ScrollView >				
			</View>
		);
	}
}

