'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, Modal, TouchableHighlight} from "react-native";
import { Container, Navbar } from 'navbar-native';

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";

export default class Login extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			height : height,
			width : width,
    			modalVisible: false,
		};
		this.navigate=this.props.navigation.navigate;
	}


	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	componentDidMount() {

	}

	getLogin(){
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
		var layoutWidth = this.state.width-30;
		var layoutHeight = this.state.height-200;
		return (

      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
presentationStyle={"formSheet"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22,marginBottom: 22,width:layoutWidth, height : layoutHeight, backgroundColor:'blue', alignItems: 'center', alignSelf: 'center', flex:1}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
		);
	}
}
