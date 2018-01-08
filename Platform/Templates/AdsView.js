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
import colors from '../Component/config/colors';
var banner = require('../images/1stepshop-1.jpg');
import CommonStyle from "../Styles/CommonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');
var styles = StyleSheet.create({
  wrapper: {
	height: 250,
    	alignItems: 'center',
    	backgroundColor: '#9DD6EB',
  },
  slide1: {
    	flex: 1,
        justifyContent: 'center',
    	alignItems: 'center',
	width:250,
	height:200
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
export default class AdsView extends Component {
	static navigationOptions = { title: 'AdsView', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			singleAdsJson : {}
		};
		this.navigate=this.props.navigation.navigate;
	}

	updateLayout(){

		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});


	}



	async componentDidMount() {
	        var singleAdsJson = this.props.navigation.state.params;
		this.setState({singleAdsJson : singleAdsJson});
	}

	updateMyState(value, keyName){
		this.setState({
			[keyName] : value
		});
	}

	onPressRedirectToGoBack(routes){
    		this.props.navigation.goBack();
		this.navigate(routes);
	}

	onPressRedirectToPassData(routes, postJson){
		alert(routes);
		this.navigate(routes, postJson);
	}

	render() { 
		var deviceWidth = this.state.width;

		var singleAdsJson = this.state.singleAdsJson;
		var descContent = null;
		descContent = <View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					Ads Code
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['adsCode']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					Title
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['adsTitle']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					Price
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['offerPrice']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					Description
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['description']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					Country
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['country']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					State
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['state']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					City
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['city']}
				</Text>
			</View>
			<View style={[CommonStyle.adsViewRow ]}>
				<Text style={[CommonStyle.adsViewHeader]}>
					Posted On
				</Text>
				<Text style={[CommonStyle.adsViewText, { width: deviceWidth-100 }]}>
					{singleAdsJson['createdAt']}
				</Text>
			</View>
		</View>;
/*
		if(singleAdsJson != null){
			descContent = Object.keys(singleAdsJson).map((key)=> {
				return <View  key={key}>
					<Text  style={{ flexDirection : 'row', backgroundColor: '#59C2AF', minHeight:40, textAlign:'center', fontSize: 14}}>
						{ key }
					</Text>
					<Text  style={{ flexDirection : 'row', backgroundColor: '#FFF', minHeight:50, padding: 10, alignItems:'center'}}>
						{singleAdsJson[key]}
					</Text>
				</View>;
			})
		}*/




    		return ( 
<View style={[{height : this.state.height, flex: 1, width : deviceWidth, backgroundColor:'#59C2AF'}]} 
	onLayout={()=> this.updateLayout()} >
	<ScrollView >
		<View style={[styles.wrapper]} >
<TouchableOpacity style={[styles.button, {top: 5, left: 0, position:'absolute', width:60, alignItems:'center'}]} onPress={()=>this.onPressRedirectToGoBack()} >
<Icon name='arrow-left' color='#fff' size={18} style={{paddingTop:5}}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>this.onPressRedirectToPassData('AdsGallery', {data: 'hh'})}>
<Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}>
		<View style={[styles.slide1]}>
		</View>
</Image>
</TouchableOpacity>

<View style={[styles.button, {top: 210, left: 0, position:'absolute', width:60, alignItems:'center'}]} >
<Icon name='camera' color='#fff' size={18} style={{paddingTop:5}}/>
</View>

		</View>
		{
			descContent		
		}
	</ScrollView>
</View>
		);
	}
}
