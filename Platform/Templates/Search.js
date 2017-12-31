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

import MKSpinner from "../Component/MKSpinner";
import SearchAdsContent from "./SearchAdsContent";

export default class Search extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			searchText : null
		};
		this.navigate=this.props.navigation.navigate;
	}

	async componentDidMount() {
		var that = this;
		that.updateMyState(true, 'isLoading');
		if(that.props.navigation.state.params != null){
			var searchText = this.props.navigation.state.params['searchText'];
			that.updateMyState(searchText, 'searchText');
		}
		setTimeout(function(){ 
			that.updateMyState(false, 'isLoading');
		}, 1000);
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

		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;
		var postJson = { adsId : 10, adsAmt : '1000', adsLocation : 'Tamil Nadu, Chennai', postedDate : '2017-12-12 00:00:00', adsTitle: 'sparesshack led lighting systems'}; 
		var adsList = <SearchAdsContent imgWidth={this.state.width-50} imgHeight={150} navigation={this.props.navigation} postJson={postJson}/>;
    		return ( 
<View style={[{height : this.state.height, flex: 1, width : layoutWidth, backgroundColor:'#59C2AF'}]} onLayout={()=> this.updateLayout()} >
	<ScrollView >
	<Text>
		{this.state.searchText}
	</Text>
	{
		adsList
	}
<MKSpinner visible={this.state.isLoading} textContent={"Please wait"} cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} />
			</ScrollView >
</View>
		);
	}
}
