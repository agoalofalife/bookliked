import React, { Component } from 'react';
import {
  StyleSheet,
  View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListBooksComponent from './js/components/listBooks/index';
import { SearchBar, Input } from 'react-native-elements'
import Login from './js/components/login/index'
type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          {/*<SearchBar*/}
              {/*showLoading*/}
              {/*onChangeText={() => { console.log('change text')}}*/}
              {/*onClear={() => { console.log('clear text')}}*/}
              {/*platform="android"*/}
              {/*cancelButtonTitle="Cancel"*/}
              {/*placeholder='Какая книга?' />*/}
        {/*<ListBooksComponent/>*/}
      <Login/>
          {/*<Text style={{color: 'red'}}>*/}
              {/*and red*/}
          {/*</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});
