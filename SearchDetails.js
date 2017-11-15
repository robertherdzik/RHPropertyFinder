import React, { Component } from 'react'
import {
	StyleSheet,
	Image,
	View,
	TouchableHighlight,
	FlatList,
	Text,
} from 'react-native';

export default class SearchDetails extends Component {
	render() {
		const { params } = this.props.navigation.state;

		return (
			<View style={styles.container}>
			<Text>
			Search for houses to buy: {params.selectedItem.title} !
			</Text>
			<Image source={{ uri: params.selectedItem.img_url }} style={styles.thumb}/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	description: {
		fontSize: 18,
		textAlign: 'center',
		color: '#656565',
		marginTop: 65,
	},
	container: {
		marginTop: 65,
		alignItems: 'center',
	},
	thumb: {
			width: 280,
			height: 280,
			marginTop: 50,
		},
});