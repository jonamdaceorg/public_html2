'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Text, ScrollView, Dimensions} from "react-native";

import EditProfile from "./Templates/EditProfile";
import ForgotPassword from "./Templates/ForgotPassword";
import Login from "./Templates/Login";

export default class App extends Component {
	render() { 
		return (
			<Text style={{paddingTop: 30}}>welcome</Text>
		);
	}
}
