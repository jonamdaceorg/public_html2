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

export default class AdPostPageTwo extends Component {

    constructor(props: Object) {
        var {height, width} = Dimensions.get('window');
        super(props);
        this.state = {
    	    selectedItems : [],
            isDateTimePickerVisible: false,
            isLoading : false,
            isCancelable : true,
            height : height,
            width : width,
            adsTitle : '',
            noOfDaysToActive : '',
            startDate : '',
            adsDescription : '',
            imageArray : '',
            errorsJson:{
                adsTitle : null,
                noOfDaysToActive : null,
                startDate : null,
                adsDescription : null,
                imageArray : null,
            }
        };
        this.navigate=this.props.navigation.navigate;
        this.onFocus = this.onFocus.bind(this);
        this.focusNextField = this.focusNextField.bind(this);
    }

    focusNextField(nextField) {
        this.refs[nextField].focus();
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

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (currentDate) => {
        //console.log('A date has been picked: ', currentDate);
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();

        var dateString = date + "-" +(month + 1) + "-" + year;
        this.setState({
            startDate: dateString
        });
        this._hideDateTimePicker();
    };

    async doAdPost(){
        var that = this;
        var inputMobileNumberValue = that.state.inputMobileNumber;
        var inputPassword = that.state.inputPassword;
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
            alert("success");
            /*
            var postJson = new FormData();
            postJson.append("username", that.state.inputMobileNumber);
            postJson.append("password", that.state.inputPassword);
            var subUrl = "getLoginFromApps";
            that.setState({isLoading : true});
            var response = await doPost(subUrl, postJson);
            if(response != null){

            }
*/
            }

    }


	onSelectedItemsChange = selectedItems => {
		this.setState({ selectedItems });
		alert(selectedItems);
	};

    render() {
        var inputWidth = this.state.width - 30;
        var layoutWidth = this.state.width;
        var inputHeight = 38;
        var inputFontSize = 16;
        var inputHighlightColor = "#00BCD4";
        const { selectedItems } = this.state;

        var adsTitleError = null;
        if(this.state.errorsJson.subCategoryId != null){
            adsTitleError = <Text style={CommonStyle.errorText}>{this.state.errorsJson.adsTitle}</Text>;
        }
        var startDateError = null;
        if(this.state.errorsJson.startDate != null){
            startDateError = <Text style={CommonStyle.errorText}>{this.state.errorsJson.startDate}</Text>;
        }
        var noOfDaysToActiveError = null;
        if(this.state.errorsJson.noOfDaysToActive != null){
            noOfDaysToActiveError = <Text style={CommonStyle.errorText}>{this.state.errorsJson.noOfDaysToActive}</Text>;
        }
        var descriptionError = null;
        if(this.state.errorsJson.adsDescription != null){
            descriptionError = <Text style={CommonStyle.errorText}>{this.state.errorsJson.adsDescription}</Text>;
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
		displayContent = <ScrollView >
                    <View style={{flex: 1, width:inputWidth, alignSelf:'center'}}>			
                        <MKTextInput label={'Ads Title'} highlightColor={inputHighlightColor}
                                     multiline = {true}
                                     onChangeText={(adsTitle) => this.updateMyState(adsTitle, 'adsTitle')}
                                     value = {this.state.adsTitle}
                                     inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
                                     returnKeyType={'next'} ref="adsTitle"
                                     onSubmitEditing={(event) => this.focusNextField('startDate')}
                                     onFocus={()=>this.onFocus()}
                            />
                        { adsTitleError }
                        <View style={{ flexDirection: "row" }}>
                        <MKTextInput label={'Start Date'} highlightColor={inputHighlightColor}
                                     editable = {false}
                                     onChangeText={(startDate) => this.updateMyState(startDate, 'startDate')}
                                     value = {this.state.startDate}
                                     inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth - 50}}
                                     returnKeyType={'next'} ref="startDate"
                                     onSubmitEditing={(event) => this.focusNextField('noOfDaysToActive')}
                                     onFocus={this._showDateTimePicker}
                            />
                            <TouchableOpacity onPress={this._showDateTimePicker} style={{marginTop : 40, paddingLeft : 20 }}>
                                <Icon name='calendar' color='#59C2AF' size={25} />
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                    />
                            </TouchableOpacity>
                        </View>
                        { startDateError }
                        <MKTextInput label={'No Of Days To Active'} highlightColor={inputHighlightColor}
                                     keyboardType={'numeric'} maxLength={2}
                                     onChangeText={(noOfDaysToActive) => this.updateMyState(noOfDaysToActive, 'noOfDaysToActive')}
                                     value = {this.state.noOfDaysToActive}
                                     inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
                                     returnKeyType={'next'} ref="noOfDaysToActive"
                                     onSubmitEditing={(event) => this.focusNextField('adsDescription')}
                                     onFocus={()=>this.onFocus()}
                            />
                        { noOfDaysToActiveError }
                        <MKTextInput label={'Description'} highlightColor={inputHighlightColor}
                                     multiline = {true}
                                     onChangeText={(adsDescription) => this.updateMyState(adsDescription, 'adsDescription')}
                                     value = {this.state.adsDescription}
                                     inputStyle={{fontSize: inputFontSize,  height: inputHeight, width: inputWidth}}
                                     returnKeyType={'next'} ref="description"
                                     onSubmitEditing={(event) => this.focusNextField('adsDescription')}
                            />
                        { descriptionError }
                        <View style={{paddingTop: 30}}></View>
                    </View>
                </ScrollView>;
		dynamicBtn = <MKButton onPress={()=> this.doAdPost()} style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}} textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'} btndisabled={this.state.isLoading}>
                    POST AD
                </MKButton>;
	
        return (
            <View style={[{height : this.state.height, flex: 1, width : layoutWidth}]} onLayout={()=> this.updateLayout()}>
                {displayContent}
                {dynamicBtn}
                <MKSpinner visible={this.state.isLoading} textContent={"Please wait"} cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}} />
            </View>
        );

    }

}
