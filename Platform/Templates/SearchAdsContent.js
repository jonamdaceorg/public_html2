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
import CommonStyle from "../Styles/CommonStyle";
export default class SearchAdsContent extends Component {

  	constructor(props: Object) {

	    	super(props);
		this.state = {
		};
		
	}

	onPressToShowSingleAds(postJson){
		this.props.navigation.navigate('AdsView', postJson);
	}

	render() { 

		var adsTitle = this.props.postJson.adsTitle;
		var adsCode = this.props.postJson.adsCode;
		var adsId = this.props.postJson.adsId;
		var adsAmt = this.props.postJson.offerPrice;
		var adsLocation = this.props.postJson.state +', '+ this.props.postJson.city;
		var postedDate = this.props.postJson.createdAt;
		var adsImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';


    		return ( 
			<MKCard>
			<Image source={{uri: adsImage}} style={{width: this.props.imgWidth, height: this.props.imgHeight, resizeMode: Image.resizeMode.contain, alignSelf:'center'}} />
			<Divider style={CommonStyle.divider} />
			<Text style={[ CommonStyle.imageCardTitle,{fontWeight:'bold'}]}>{adsTitle}</Text>
			<Text style={[ CommonStyle.imageCardTitle]}>{adsLocation} | {postedDate} </Text>
			<View style={{flexDirection:'row'}}>
<Text style={[ CommonStyle.imageCardTitle, {width: 80, textAlign:'left', fontWeight:'bold', color:'#F9CE0D'}]}>₹{adsAmt}</Text>
<TouchableOpacity onPress={()=> this.onPressToShowSingleAds(this.props.postJson)}>
<Text style={[ CommonStyle.imageCardTitle, {width: this.props.imgWidth-100,textAlign:'right', color:'#489FDF'}]} >
View More Details »
</Text>
</TouchableOpacity>
</View>
			</MKCard>
		);
	}
}
