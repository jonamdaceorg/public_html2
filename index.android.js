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

import App from "./Platform/App";
export default class OneStepShop extends Component {
	constructor(props){
		super(props);
		this.state = {isLoading : false}
	}

	render() {
		return (
			<View style={styles.container}>
				<App />
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
});

AppRegistry.registerComponent('OneStepShop', () => OneStepShop);
