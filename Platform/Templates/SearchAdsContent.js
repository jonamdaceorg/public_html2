'use strict';
import React, {Component, PropTypes} from "react";
import {
	View, 
	Text, 
	TouchableOpacity, 
	StyleSheet,
	Platform,
	Image
	} from "react-native";

import MKSpinner from "../Component/MKSpinner";
import MKCard from "../Component/MKCard";
import Divider from '../Component/divider/Divider';
var banner = require('../images/1stepshop-1.jpg');
import CommonStyle from "../Styles/CommonStyle";
export default class SearchAdsContent extends Component {

  	constructor(props: Object) {

	    	super(props);
		this.state = {
		};
	}

	onPressToShowSingleAds(adsId){
		alert(adsId);
	}

	render() { 

    		return ( 
			<MKCard>
			<Image source={banner} style={{width: this.props.imgWidth, height: this.props.imgHeight, resizeMode: Image.resizeMode.contain, alignSelf:'center'}} />
			<Divider style={CommonStyle.divider} />
			<Text style={[ CommonStyle.imageCardTitle,{fontWeight:'bold'}]}>sparesshack led lighting systems</Text>
			<Text style={[ CommonStyle.imageCardTitle]}>Tamil Nadu, Chennai | 2017-12-12 00:00:00</Text>
			<View style={{flexDirection:'row'}}>
<Text style={[ CommonStyle.imageCardTitle, {width: 80, textAlign:'left', fontWeight:'bold', color:'#F9CE0D'}]}>₹2000000</Text>
<TouchableOpacity onPress={()=> this.onPressToShowSingleAds('ttt')}>
<Text style={[ CommonStyle.imageCardTitle, {width: this.props.imgWidth-100,textAlign:'right', color:'#489FDF'}]} >View More Details » </Text>
</TouchableOpacity>
</View>
			</MKCard>
		);
	}
}
