'use strict';
import React, {Component, PropTypes} from "react";
import {
	View, 
	Text, 
	TouchableOpacity, 
	StyleSheet,
	Platform,
	Dimensions,
	ScrollView,
	Image
	} from "react-native";

import MKSpinner from "../Component/MKSpinner";
import MKCard from "../Component/MKCard";
import Divider from '../Component/divider/Divider';
var banner = require('../images/1stepshop-1.jpg');
import CommonStyle from "../Styles/CommonStyle";
export default class AdsView extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
		};
		this.navigate=this.props.navigation.navigate;
	}

	updateLayout(){
		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});
	}

	async componentDidMount() {

	}

	updateMyState(value, keyName){
		this.setState({
			[keyName] : value
		});
	}

	render() { 
		var layoutWidth = this.state.width;
    		return ( 
			<View style={[{height : this.state.height, flex: 1, width : layoutWidth, backgroundColor:'#59C2AF'}]} 
				onLayout={()=> this.updateLayout()} >
				<ScrollView >
			<View style={{height : this.state.height/2, backgroundColor:'#FFF'}}>

			</View>
<Text >
hafhskjfb jshfjhsajhs ajkshjhsfkj { JSON.stringify(this.props.navigation.state.params) }
</Text>

				</ScrollView>
			</View>
		);
	}
}
