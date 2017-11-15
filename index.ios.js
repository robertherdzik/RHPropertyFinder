/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults'; 
import SearchDetails from './SearchDetails'; 

const PropertyFinder = StackNavigator({
  Home: { screen: SearchPage },
  SearchResults: { screen: SearchResults },
  SearchDetails: { screen: SearchDetails },
});


AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
