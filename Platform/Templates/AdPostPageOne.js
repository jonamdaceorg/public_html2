'use strict';
import React, {Component, PropTypes} from "react";
import {
    View,
    ListView,
    StyleSheet,
    Animated,
    Text,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    AsyncStorage
} from "react-native";

import CommonStyle from "../Styles/CommonStyle";
import MKButton from "../Component/MKButton";
import MKTextInput from "../Component/MKTextInput";
import { doPost } from "../Component/MKActions";
import MKSpinner from "../Component/MKSpinner";

import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSelect from 'react-native-multiple-select';

export default class AdPostPageOne extends Component {

    constructor(props:Object) {
        var {height, width} = Dimensions.get('window');
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            stage: 0,
            selectedItems: [],
            isDateTimePickerVisible: false,
            isLoading: false,
            isCancelable: true,
            height: height,
            width: width,
            stateId: ['92iijs7yta'],
            cityId: ['92iijs7yta'],
            categoryId: '',
            subCategoryId: ['92iijs7yta'],
            listItems: ds.cloneWithRows([]),
            ds:ds,
            colorArray : ['','#dd0908','#ff9e29','#3fb7d2','#dd0908','#c119ce', '#1963ce','#7fbad8', '#df8012', '#dd0908', '#070c1f', '#f49ecf', '#1ca39d'],
            errorsJson: {
                stateId: null,
                cityId: null,
                categoryId: null,
                subCategoryId: null
            }
        };
        this.navigate = this.props.navigation.navigate;
        this.onFocus = this.onFocus.bind(this);
        this.onSelectedItemsChange = this.onSelectedItemsChange.bind(this);
    }

    updateMyState(value, keyName) {
        this.setState({
            [keyName]: value
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

    updateLayout() {
        var {height, width} = Dimensions.get('window');
        this.setState({height: height, width: width});
    }

    onPressRedirect(routes) {
        this.navigate(routes);
    }

    async doContinue() {
        var that = this;
        var isValid = 1;
        var stateArray = that.state;
        var errorsJson = that.state.errorsJson;
        Object.keys(errorsJson).forEach(function (key) {
            var stateArrayValue = stateArray[key];
            if (stateArrayValue == null || stateArrayValue == "") {
                errorsJson[key] = "This field is required";
                isValid = 0;
            } else {
                errorsJson[key] = null;
            }
        });
        await that.updateMyState(errorsJson, 'errorsJson');

        if (isValid == 1) {
            this.onPressRedirect("AdPostPageTwo");
        }

    }

    onSelectedItemsChange(keyName, selectedItems) {
        this.setState({[keyName]: selectedItems});
    }

;

    async componentDidMount() {

        var that = this;
        const categoryJson = await AsyncStorage.getItem('categoryJson');
        if (categoryJson == null) {
            await this.getCategoryListFromApps();
        } else {
            that.updateMyState(that.state.ds.cloneWithRows(JSON.parse(categoryJson)), 'listItems');
        }
    }

    async getCategoryListFromApps() {
        var that = this;
        var subUrl = "getCategoryListFromApps";
        that.setState({isLoading: true});
        var categoryJson = await doPost(subUrl, null);
        if (categoryJson != null) {
            categoryJson = categoryJson.sort(function (a, b) {
                return parseInt(a.categoryId) - parseInt(b.categoryId);
            });
            alert(that.state.ds.cloneWithRows(categoryJson))
            that.updateMyState(that.state.ds.cloneWithRows(categoryJson), 'listItems');
            await AsyncStorage.setItem('categoryJson', JSON.stringify(categoryJson));
        }
        that.setState({isLoading: false});
    }

    selectCategory(categoryId, category){
        this.setState({
            categoryId : categoryId,
            category : category
        });
    }


    renderGridItem(item){
        var categoryId = item.categoryId;
        var category = item.category;
        var icons = item.icons;
        var color = this.state.colorArray[categoryId];
        if(color == null)
            color = "red";
        if(icons != null)
            icons = icons.replace("fa fa-", "");
        return (
            <View style={{ width: 75, height: 100, alignItems:'center', marginTop : 5}}>
                <TouchableOpacity onPress={()=>this.selectCategory(categoryId, category)} >
                    <View style={{flexDirection: 'row', backgroundColor: '#FFF', borderRadius:25, width: 50, height: 50, alignItems:'center', justifyContent:'center'}}>
                        <Icon name={icons} color={color} size={20} />
                    </View>
                </TouchableOpacity>
                <Text style={{marginTop: 7, fontSize : 10, color: '#59C2AF', textAlign:'center'}}>{category}</Text>
            </View>
        );
    }

    render() {
        var inputWidth = this.state.width - 30;
        var layoutWidth = this.state.width;
        var inputHeight = 38;
        var inputFontSize = 16;
        var inputHighlightColor = "#00BCD4";
        const { selectedItems } = this.state;

        //Error Block Code start
        var stateIdError = null;
        if (this.state.errorsJson.stateId != null) {
            stateIdError = <Text
                style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.stateId}</Text>;
        }
        var cityIdError = null;
        if (this.state.errorsJson.cityId != null) {
            cityIdError = <Text
                style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.cityId}</Text>;
        }
        var subCategoryIdError = null;
        if (this.state.errorsJson.subCategoryId != null) {
            subCategoryIdError = <Text
                style={[CommonStyle.errorText, {paddingBottom : 20, paddingTop : -10}]}>{this.state.errorsJson.subCategoryId}</Text>;
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

        dynamicBtn = <MKButton onPress={()=> this.doContinue()}
                               style={{backgroundColor : '#59C2AF', borderColor: '#59C2AF', height:60}}
                               textStyle={{color: '#FFF'}} activityIndicatorColor={'orange'}
                               btndisabled={this.state.isLoading}>CONTINUE</MKButton>;


        var subCategoryContent = null;
        if(this.state.categoryId != ""){
            subCategoryContent = <Text style={{fontWeight : "bold", paddingBottom : 15, paddingTop : 15}}>
                {this.state.category}
            </Text>;
        }

        return (
            <View style={[{height : this.state.height, flex: 1, width : layoutWidth}]}
                  onLayout={()=> this.updateLayout()}>
                <ScrollView style={{ flex: 1, padding : 10}}>
                    <Text style={{fontWeight : "bold",  paddingBottom : 15, paddingTop : 15}}>Please choose Category</Text>
                    <ListView
                        horizontal={true}
                        pageSize = {2}
                        style={{flex:1}}
                        enableEmptySections={true}
                        dataSource={this.state.listItems}
                        renderRow={(data) => this.renderGridItem(data)}
                        />

                    {subCategoryContent}
                    {displayContent}
                    {dynamicBtn}
                <MKSpinner visible={this.state.isLoading} textContent={"Please wait"}
                           cancelable={this.state.isCancelable} textStyle={{color: '#FFF'}}/>
                </ScrollView>
            </View>
        );

    }

}
