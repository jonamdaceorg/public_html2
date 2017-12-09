'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, Image, ListView, AsyncStorage} from "react-native";
import Geocoder from 'react-native-geocoder';

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-icon-checkbox';

import { doPost } from "../Component/MKActions";
import MKSpinner from "../Component/MKSpinner";

Geocoder.fallbackToGoogle("AIzaSyCbkW5l6iPkWb551pynfeBn3Lzb69_FFsY");

export default class MyAccount extends Component {

	//static navigationOptions = { title: 'Welcome', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			isLoading : false,
			isChecked: false,
			isRadioSelected: true,
			height : height,
			width : width,
			categoryJson : null,
			ds:ds,
			region: [],
			latitude: null,
			longitude: null,
			userAddress : null,
	    		listItems : ds.cloneWithRows([]),
			colorArray : ['','#dd0908','#ff9e29','#3fb7d2','#dd0908','#c119ce', '#1963ce','#7fbad8', '#df8012', '#dd0908', '#070c1f', '#f49ecf', '#1ca39d']

		};
		this.navigate=this.props.navigation.navigate;
	}

	async componentDidMount() {
		var that = this;
 		const categoryJson = await AsyncStorage.getItem('categoryJson');
		if(categoryJson == null){
			await this.getCategoryListFromApps();	
		} else {
			that.updateMyState(that.state.ds.cloneWithRows(JSON.parse(categoryJson)), 'listItems');
		}

		/*navigator.geolocation.getCurrentPosition( (position) => {
			that.updateMyState(position, 'region');
			}, (error) => alert(error.message),
			{enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
		);*/
		this.watchID = navigator.geolocation.watchPosition( (position) => {
					var lat = position.coords.latitude;
					var lon = position.coords.longitude;

					that.updateMyState(position, 'region');
					that.updateMyState(lat, 'latitude');
					that.updateMyState(lon, 'longitude');				

					}, (error) => alert(error.message),
					{enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
				);
	}

	async getGeoLocation(){
		var lat = this.state.latitude;
		var lng = this.state.longitude;
		if(lat != null && lng != null){
			let userAddress = await Geocoder.geocodePosition({lat, lng});
			this.updateMyState(userAddress, 'userAddress');
		}
	}

	componentWillUnmount() {
	    navigator.geolocation.clearWatch(this.watchID);
	}

	async getCategoryListFromApps(){
		var that = this;
		var subUrl = "getCategoryListFromApps";
		that.setState({isLoading : true});
		var categoryJson = await doPost(subUrl, null);

		if(categoryJson != null){	
			categoryJson = categoryJson.sort(function(a, b) {
			    return parseInt(a.categoryId) - parseInt(b.categoryId);
			});		
			that.updateMyState(that.state.ds.cloneWithRows(categoryJson), 'listItems');
 			await AsyncStorage.setItem('categoryJson', JSON.stringify(categoryJson));
		}
	}

	updateMyState(value, keyName){
		this.setState({
			[keyName] : value
		});
	}

	onPressRedirect(routes){
		this.navigate(routes);
	}

	updateLayout(){
		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});
	}

	onPressRedirect(routes){
		this.navigate(routes);
	}

	renderGridItem(item, layoutWidth){
		//var layoutWidth = this.state.width;
		var categoryId = item.categoryId;
		var category = item.category;
		var icons = item.icons;
		var color = this.state.colorArray[categoryId];
		if(color == null)
			color = "red";
		if(icons != null)
		icons = icons.replace("fa fa-", "");
		return (
		<View style={{ width: layoutWidth/3, height: layoutWidth/3+15, alignItems:'center', marginTop : 15}}>
			<View style={{flexDirection: 'row', backgroundColor: '#FFF', borderRadius:10, width: 80, height: 80,  alignItems:'center', justifyContent:'center'}}>
				<Icon name={icons} color={color} size={layoutWidth/8} />
			</View>	
			<Text style={{marginTop: 7, fontSize : 12, color: '#FFF', textAlign:'center'}}>{category}</Text>
		</View>
		);
	}

	render() { 
		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;

		if(this.state.latitude != null && this.state.latitude != null ){
			this.getGeoLocation()
		}

    		return ( 
	<View style={[{height : this.state.height, flex: 1, width : layoutWidth, backgroundColor:'#59C2AF'}]} onLayout={()=> this.updateLayout()} >
		<ScrollView style={{ flex: 1}}>
			<ListView contentContainerStyle={styles.grid} dataSource={this.state.listItems} renderRow={(item) => this.renderGridItem(item, 300)} enableEmptySections={true}/>
			<Text>{JSON.stringify(this.state.userAddress)}</Text>
		</ScrollView>				
	</View>
		);
	}
}





const styles = StyleSheet.create({
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        margin:5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemImage: {
        width: 100,
        height: 100,
        borderWidth: 1.5, 
        borderColor: 'white',
        borderRadius: 50,
    },
    gridItemText: {
        marginTop: 5,
        textAlign:'center',
    },
});
