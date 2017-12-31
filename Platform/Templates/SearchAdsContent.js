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
		this.props.navigation.navigate('AdsView', { 'adsId' : adsId });
	}

	render() { 

		var adsTitle = this.props.postJson.adsTitle;
		var adsId = this.props.postJson.adsId;
		var adsAmt = this.props.postJson.adsAmt;
		var adsLocation = this.props.postJson.adsLocation;
		var postedDate = this.props.postJson.postedDate;


    		return ( 
			<MKCard>
			<Image source={banner} style={{width: this.props.imgWidth, height: this.props.imgHeight, resizeMode: Image.resizeMode.contain, alignSelf:'center'}} />
			<Divider style={CommonStyle.divider} />
			<Text style={[ CommonStyle.imageCardTitle,{fontWeight:'bold'}]}>{adsTitle}</Text>
			<Text style={[ CommonStyle.imageCardTitle]}>{adsLocation} | {postedDate} </Text>
			<View style={{flexDirection:'row'}}>
<Text style={[ CommonStyle.imageCardTitle, {width: 80, textAlign:'left', fontWeight:'bold', color:'#F9CE0D'}]}>₹{adsAmt}</Text>
<TouchableOpacity onPress={()=> this.onPressToShowSingleAds(adsId)}>
<Text style={[ CommonStyle.imageCardTitle, {width: this.props.imgWidth-100,textAlign:'right', color:'#489FDF'}]} >View More Details »
</Text>
</TouchableOpacity>
</View>
			</MKCard>
		);
	}
}
