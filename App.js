/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ListBooksComponent from './js/components/listBooks/index';

import { SearchBar } from 'react-native-elements'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <SearchBar
              showLoading
              onChangeText={() => { console.log('change text')}}
              onClear={() => { console.log('clear text')}}
              platform="android"
              cancelButtonTitle="Cancel"
              placeholder='Какая книга?' />
        <ListBooksComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  }
});
