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
import Geocoder from 'react-native-geocoder';

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-icon-checkbox';

import { doPost } from "../Component/MKActions";
import MKSpinner from "../Component/MKSpinner";

Geocoder.fallbackToGoogle("AIzaSyCbkW5l6iPkWb551pynfeBn3Lzb69_FFsY");

export default class Search extends Component {

	static navigationOptions = { title: 'Welcome', header: null };
  	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
	    	super(props);
 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			height : height,
			width : width,
			searchText: '',
			ds:ds,
	    		listItems : ds.cloneWithRows([])
		};
		this.navigate=this.props.navigation.navigate;
	}

	async componentDidMount() {

		ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
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

	onPressSearch(){
		alert("test"+this.state.searchText);
	}

	render() { 
		var inputWidth = this.state.width-30;
		var layoutWidth = this.state.width;

		if(this.state.latitude != null && this.state.latitude != null ){
			this.getGeoLocation()
		}

    		return ( 
	<View style={[{height : this.state.height, flex: 1, width : layoutWidth, backgroundColor:'#59C2AF'}]} onLayout={()=> this.updateLayout()} >
		<View style={{alignItems:'center'}}>
			<View style={{width: layoutWidth, height: 60, borderRadius: 3, backgroundColor: 'orange' }}>

					<View  style={{flexDirection:'row'}}>
	       		<TouchableOpacity style={[styles.button, {marginVertical:15, width:60, alignItems:'center'}]} onPress={()=>this.onPressRedirect('Dashboard')} >
							<Icon name='arrow-left' color='#FFF' size={18} style={{paddingTop:5}}/>
			</TouchableOpacity>
			<View style={{marginTop:10}}>
				<TextInput 
					placeholder='Search' 
					placeholderTextColor='#FFF' autoFocus={true} underlineColorAndroid={'transparent'}
					onChangeText={(searchText) => this.updateMyState(searchText, 'searchText')}
					value={this.state.searchText}
					onEndEditing={()=>this.onPressSearch()} returnKeyType={'search'}
					style= {{color:'#FFF', height:45,fontSize: 20,width: layoutWidth-125, }}/>
			</View>
			<TouchableOpacity style={[styles.button, {marginVertical:15, width:60, alignItems:'center'}]} onPress={()=>this.onPressSearch()} >
					<Icon name='search' color='#FFF' size={20} style={{paddingTop:5}}/>
			</TouchableOpacity>
					</View>

			</View>
		</View>
		<ScrollView style={{ flex: 1}}>
			<Text>
				eee
			</Text>
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
