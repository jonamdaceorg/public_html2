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
import { doPost } from "../Component/MKActions";

export default class Search extends Component {

  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			isLoading : false,
			height : height,
			width : width,
			searchText : "",
			ds:ds,
			categoryId:3,
	    		listItems : ds.cloneWithRows([]),
			searchResultJson : {}
		};
		this.navigate=this.props.navigation.navigate;
	}

	async componentDidMount() {
		var that = this;
		if(that.props.navigation.state.params != null){
			var searchText = this.props.navigation.state.params['searchText'];
			that.updateMyState(searchText, 'searchText');

			var categoryId = this.props.navigation.state.params['categoryId'];
			that.updateMyState(categoryId, 'categoryId');
		}
		await this.dataLoading();
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
	
	async dataLoading(){
		var searchResultJson = {};
		var that = this;
		var postJson = new FormData();
		postJson.append("page", 0);
		postJson.append("getListFromPage", "adsList");
		postJson.append("city", "");
		postJson.append("categoryId", this.state.categoryId);
		postJson.append("SubcategoryId", "");
		postJson.append("searchText", this.state.searchText);
		postJson.append("searchUserId", "");
		postJson.append("rf", "json");
		var subUrl = "searchAdsAjax";
		that.updateMyState(true, 'isLoading');
		var response = await doPost(subUrl, postJson);
		setTimeout(function(){ 
			that.updateMyState(false, 'isLoading');
		}, 1000);

		if(response != null){
			var searchData = response['searchData'];
			if(searchData != null){
				that.updateMyState( response,'searchResultJson');
				that.updateMyState(that.state.ds.cloneWithRows(searchData), 'listItems');
			}
		}


	}

	constructTemplate(item){
		return <SearchAdsContent imgWidth={this.state.width-50} 
					imgHeight={150} 
					navigation={this.props.navigation} 
					postJson={item}/>;
	}

	render() { 

		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;
    		return ( 
			<View style={[{height : this.state.height, flex: 1, width : layoutWidth, backgroundColor:'#59C2AF'}]} 
				onLayout={()=> this.updateLayout()} >
				<ScrollView >
					<ListView style={{paddingBottom:15}} dataSource={this.state.listItems} 
						renderRow={(item) => this.constructTemplate(item)} 
						enableEmptySections={true}/>
						
					<MKSpinner visible={this.state.isLoading} textContent={"Please wait"} 
						cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} />
					
				</ScrollView>
			</View>
		);
	}
}
