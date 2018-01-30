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

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
	height:200
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
export default class AdsGallery extends Component {
	static navigationOptions = { title: 'AdsGallery', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			adsgalleryDetails : {}
		};
		this.navigate=this.props.navigation.navigate;
	}

	updateLayout(){
		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});
	}

	async componentDidMount() {
		this.updateMyState(this.props.navigation.state.params.data, 'adsgalleryDetails');
		alert(JSON.stringify(this.props.navigation.state.params.data));
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
					<Swiper style={{height: this.state.height-25}} showsButtons={false}>
					<View style={styles.slide1}>
<Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={{width: layoutWidth, height:this.state.height-25 }}/>
					</View>
					<View style={styles.slide2}>
<Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={{width: layoutWidth, height:this.state.height-25 }}/>
					</View>
					<View style={styles.slide3}>
<Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={{width: layoutWidth, height:this.state.height-25 }}/>
					</View>
					</Swiper>
					<Text>{JSON.stringify(this.state.adsgalleryDetails)}</Text>
				</ScrollView>
			</View>
		);
	}
}
