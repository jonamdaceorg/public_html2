'use strict';
import React, {Component, PropTypes} from "react";
import {View, StyleSheet, Animated, Text, TextInput, ScrollView, Dimensions, TouchableOpacity, AsyncStorage} from "react-native";

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import { doPost } from "../Component/MKActions";
import MKSpinner from "../Component/MKSpinner";

import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSelect from 'react-native-multiple-select';

export default class AdPostPageOne extends Component {

	constructor(props: Object) {
		var {height, width} = Dimensions.get('window');
		super(props);
		this.state = {
		    stage : 0,
		    selectedItems : [],
		    isDateTimePickerVisible: false,
		    isLoading : false,
		    isCancelable : true,
		    height : height,
		    width : width,
		    stateId : [],
		    cityId : [],
		    categoryId : [],
		    subCategoryId : [],
		    errorsJson:{
			stateId : null,
			cityId : null,
			categoryId : null,
			subCategoryId : null
		    }
		};
		this.navigate=this.props.navigation.navigate;
        	this.onFocus = this.onFocus.bind(this);
		this.onSelectedItemsChange = this.onSelectedItemsChange.bind(this);
	}

	updateMyState(value, keyName){
		this.setState({
		    [keyName] : value
		});
	}

	onFocus() {
		let errorsJson = this.state.errorsJson;
		var that = this;
		for (let name in errorsJson) {
		    let ref = this.refs[name];
		    if (ref && ref.isFocused()) {
			errorsJson[name] = null;
		    }
		}
		that.updateMyState(errorsJson, 'errorsJson');
	}

	updateLayout(){
		var {height, width} = Dimensions.get('window');
		this.setState({height : height, width : width});
	}

	onPressRedirect(routes){
		this.navigate(routes);
	}

	async doContinue(){
		var that = this;
		var isValid = 1;
		var stateArray = that.state;
		var errorsJson = that.state.errorsJson;
		Object.keys(errorsJson).forEach(function(key) {
		    var stateArrayValue = stateArray[key];
		    if(stateArrayValue == null || stateArrayValue==""){
		        errorsJson[key] = "This field is required";
		        isValid = 0;
		    } else {
		        errorsJson[key] = null;
		    }
		});
        	await that.updateMyState(errorsJson, 'errorsJson');

		if(isValid == 1){
			this.onPressRedirect("AdPostPageTwo");
		}

	}

	onSelectedItemsChange(keyName, selectedItems){
		this.setState({ [keyName] : selectedItems });
	};

    render() {
        var inputWidth = this.state.width - 30;
        var layoutWidth = this.state.width;
        var inputHeight = 38;
        var inputFontSize = 16;
        var inputHighlightColor = "#00BCD4";
        const { selectedItems } = this.state;

        //Error Block Code start
        var stateIdError = null;
        if(this.state.errorsJson.stateId != null){
            stateIdError = <Text style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.stateId}</Text>;
        }
        var cityIdError = null;
        if(this.state.errorsJson.cityId != null){
            cityIdError = <Text style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.cityId}</Text>;
        }
        var categoryIdError = null;
        if(this.state.errorsJson.categoryId != null){
            categoryIdError = <Text style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.categoryId}</Text>;
        }
        var subCategoryIdError = null;
        if(this.state.errorsJson.subCategoryId != null){
            subCategoryIdError = <Text style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.subCategoryId}</Text>;
        }

	var items = [{
	id: '92iijs7yta',
	name: 'Ondo',
	}, {
	id: 'a0s0a8ssbsd',
	name: 'Ogun',
	}, {
	id: '16hbajsabsd',
	name: 'Calabar',
	}, {
	id: 'nahs75a5sg',
	name: 'Lagos',
	}, {
	id: '667atsas',
	name: 'Maiduguri',
	}, {
	id: 'hsyasajs',
	name: 'Anambra',
	}, {
	id: 'djsjudksjd',
	name: 'Benue',
	}, {
	id: 'sdhyaysdj',
	name: 'Kaduna',
	}, {
	id: 'suudydjsjd',
	name: 'Abuja',
	}];
	var displayContent = null;
	var dynamicBtn = null;

	displayContent = 
	<View style={{flex: 1, width:inputWidth, alignSelf:'center', paddingTop : 20}}>
	<MultiSelect
		  hideTags
		  single
		  items={items}
		  uniqueKey="id"
		  ref={(component) => { this.multiSelect = component }}
		  onSelectedItemsChange={(items) => this.onSelectedItemsChange('stateId', items)}
		  selectedItems={ this.state.stateId }
		  selectText="Select State"
		  searchInputPlaceholderText="Search State..."
		  onChangeInput={ (text)=> console.log(text)}
		  altFontFamily="ProximaNova-Light"
		  tagRemoveIconColor="#CCC"
		  tagBorderColor="#CCC"
		  tagTextColor="#CCC"
		  selectedItemTextColor="#CCC"
		  selectedItemIconColor="#CCC"
		  itemTextColor="#000"
		  displayKey="name"
		  searchInputStyle={{ color: '#CCC'}}
		  submitButtonColor="#CCC"
		  submitButtonText="Submit"
		  fixedHeight={true}

	/>
	{ stateIdError }
	<MultiSelect
		  hideTags
		  single
		  items={items}
		  uniqueKey="id"
		  ref={(component) => { this.multiSelectNew = component }}
		  onSelectedItemsChange={(items) => this.onSelectedItemsChange('cityId', items)}
		  selectedItems={ this.state.cityId }
		  selectText="Select City"
		  searchInputPlaceholderText="Search City..."
		  onChangeInput={ (text)=> console.log(text)}
		  altFontFamily="ProximaNova-Light"
		  tagRemoveIconColor="#CCC"
		  tagBorderColor="#CCC"
		  tagTextColor="#CCC"
		  selectedItemTextColor="#CCC"
		  selectedItemIconColor="#CCC"
		  itemTextColor="#000"
		  displayKey="name"
		  searchInputStyle={{ color: '#CCC'}}
		  submitButtonColor="#CCC"
		  submitButtonText="Submit"
		  fixedHeight={true}

	/>
        { cityIdError }
	<MultiSelect
		  hideTags
		  single
		  items={items}
		  uniqueKey="id"
		  ref={(component) => { this.multiSelectNew = component }}
		  onSelectedItemsChange={(items) => this.onSelectedItemsChange('categoryId', items)}
		  selectedItems={ this.state.categoryId }
		  selectText="Select Category"
		  searchInputPlaceholderText="Search Category..."
		  onChangeInput={ (text)=> console.log(text)}
		  altFontFamily="ProximaNova-Light"
		  tagRemoveIconColor="#CCC"
		  tagBorderColor="#CCC"
		  tagTextColor="#CCC"
		  selectedItemTextColor="#CCC"
		  selectedItemIconColor="#CCC"
		  itemTextColor="#000"
		  displayKey="name"
		  searchInputStyle={{ color: '#CCC'}}
		  submitButtonColor="#CCC"
		  submitButtonText="Submit"
		  fixedHeight={true}

	/>
        { categoryIdError }
	<MultiSelect
		  hideTags
		  single
		  items={items}
		  uniqueKey="id"
		  ref={(component) => { this.multiSelectNew = component }}
		  onSelectedItemsChange={(items) => this.onSelectedItemsChange('subCategoryId', items)}
		  selectedItems={ this.state.subCategoryId }
		  selectText="Select Sub Category"
		  searchInputPlaceholderText="Search Sub Category..."
		  onChangeInput={ (text)=> console.log(text)}
		  altFontFamily="ProximaNova-Light"
		  tagRemoveIconColor="#CCC"
		  tagBorderColor="#CCC"
		  tagTextColor="#CCC"
		  selectedItemTextColor="#CCC"
		  selectedItemIconColor="#CCC"
		  itemTextColor="#000"
		  displayKey="name"
		  searchInputStyle={{ color: '#CCC'}}
		  submitButtonColor="#CCC"
		  submitButtonText="Submit"
		  fixedHeight={true}

	/>
	{ subCategoryIdError }
	</View>;

	dynamicBtn = <MKButton onPress={()=> this.doContinue()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>CONTINUE</MKButton>;

	
        return (
            <View style={[{height : this.state.height, flex: 1, width : layoutWidth}]} onLayout={()=> this.updateLayout()}>
                {displayContent}
                {dynamicBtn}
                <MKSpinner visible={this.state.isLoading} textContent={"Please wait"} cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} />
            </View>
        );

    }

}
