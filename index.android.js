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

import EditProfile from "./Platform/Templates/EditProfile";

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
				<EditProfile />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
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
