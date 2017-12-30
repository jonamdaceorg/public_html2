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

	render() { 

    		return ( 
			<MKCard title={'sparesshack led lighting systems'}>
				<Image source={banner} />
				<Divider style={CommonStyle.divider} />
				<Text style={[ CommonStyle.imageCardTitle]}>sparesshack led lighting systems</Text>
				<Text style={[ CommonStyle.imageCardTitle]}>View More Details » </Text>
				<Text style={[ CommonStyle.imageCardTitle]}>Automobiles » Spare parts</Text>
			</MKCard>
		);
	}
}
