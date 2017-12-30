import {StyleSheet, Platform} from "react-native";
import normalize from '../Component/helpers/normalizeText';
import fonts from '../Component/config/fonts';
import colors from '../Component/config/colors';

module.exports = StyleSheet.create({
  	labelText: {
    		backgroundColor: 'rgba(0,0,0,0)',
    		color : '#2B8CB9',
		fontSize : 13,
		paddingTop : 15
	},
	textInput :{
		fontSize: 16,
		height: 38,
		width:200
	},
	errorText : {
		fontSize: 13,
		color: 'red',
		paddingTop : 15
	},
	successText : {
		fontSize: 13,
		color: 'green',
		paddingTop : 15
	},
	cardTitle: {
		fontSize: normalize(14),
		...Platform.select({
			ios: {
				fontWeight: 'bold',
			},
			android: {
				...fonts.android.black,
			},
		}),
		textAlign: 'center',
		marginBottom: 15,
		color: colors.grey1,
	},
	pricingTitle: {
		textAlign: 'center',
		color: colors.primary,
		fontSize: normalize(30),
		...Platform.select({
		ios: {
			fontWeight: '800',
		},
		android: {
			...fonts.android.black,
		},
		}),
	},
	cardInnerTitle: {
		textAlign: 'center',
		color: colors.primary,
		fontSize: normalize(20),
		...Platform.select({
		ios: {
			fontWeight: '800',
		},
		android: {
			...fonts.android.black,
		},
		}),
	},
	imageCardTitle: {
		marginTop: 15,
	},
});
