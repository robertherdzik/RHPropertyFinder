'use strict';

import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	View,
	TouchableHighlight,
	FlatList,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchDetails from './SearchDetails'; 

export default class SearchResults extends Component {
	_keyExtractor = (item, index) => index;

		_renderItem = ({item, index}) => (
			<ListItem
			item={item}
			index={index}
			onPressItem={this._onPressItem}
			/>
		);

		_onPressItem = (index, title) => {
			const { params } = this.props.navigation.state;
			const { navigate } = this.props.navigation;
			
			console.log("Pressed row: "+index);
			console.log("Title: "+params.listings[index]);
			var selectedItem = params.listings[index]
			navigate('SearchDetails', { selectedItem: selectedItem })
		};

		render() {
			const { params } = this.props.navigation.state;
			
			return (
			<FlatList
			fer='flatList'
			data={params.listings}
			keyExtractor={this._keyExtractor}
			renderItem={this._renderItem}
			/>
			);
		}
	}

	class ListItem extends React.PureComponent {
		_onPress = () => {
			this.props.onPressItem(this.props.index, this.props.item.img_url);
		}

		render() {
			const item = this.props.item;
			const price = item.price_formatted.split(' ')[0];
			return (
			<TouchableHighlight
			onPress={this._onPress}
			underlayColor='#dddddd'>
			<View>
			<View style={styles.rowContainer}>
			<Image style={styles.thumb} source={{ uri: item.img_url }} />
			<View style={styles.textContainer}>
			<Text style={styles.price}>{price}</Text>
			<Text style={styles.title}
			numberOfLines={1}>{item.title}</Text>
			</View>
			</View>
			<View style={styles.separator}/>
			</View>
			</TouchableHighlight>
			);
		}
	}

	const styles = StyleSheet.create({
		thumb: {
			width: 80,
			height: 80,
			marginRight: 10
		},
		textContainer: {
			flex: 1
		},
		separator: {
			height: 1,
			backgroundColor: '#dddddd'
		},
		price: {
			fontSize: 25,
			fontWeight: 'bold',
			color: '#48BBEC'
		},
		title: {
			fontSize: 20,
			color: '#656565'
		},
		rowContainer: {
			flexDirection: 'row',
			padding: 10
		},
	});