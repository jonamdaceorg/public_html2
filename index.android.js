/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MKButton from "./Platform/Component/MKButton";
import MKTextField from "./Platform/Component/MKTextField";

export default class OneStepShop extends Component {
	constructor(props){
		super(props);
		this.state = {isLoading : false}
	}
	
	register(){
		this.setState({isLoading : true});
		alert("register");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
				  Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
				  To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
				  Double tap R on your keyboard to reload,{'\n'}
				  Shake or press menu button for dev menu
				</Text>
				<MKButton isLoading={this.state.isLoading}>Sign Up</MKButton>
				<MKButton onPress={()=>this.register()}>Sign Up</MKButton>

        <MKTextField
          placeholder={"name of field"}
          value={"value of field"}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OneStepShop', () => OneStepShop);
