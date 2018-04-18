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

import Book from './js/components/book/index'
type Props = {};

export default class App extends Component<Props> {
  constructor(){
    super();
    this.state = {
      isAuth:false,
    };
  }
  setAuth = (bool) => {
      this.setState({
          isAuth:bool
      });
  }
  render() {
      closeDrawer = () => {
          this.drawer._root.close()
      };
      openDrawer = () => {
          this.drawer._root.open()
      };
    return (
      <View style={styles.container}>
          {/*{this.state.isAuth &&*/}
              {/*<SearchBar*/}
              {/*showLoading*/}
              {/*onChangeText={() => { console.log('change text')}}*/}
              {/*onClear={() => { console.log('clear text')}}*/}
              {/*platform="android"*/}
              {/*cancelButtonTitle="Cancel"*/}
              {/*placeholder='Какая книга?'/>}*/}

          {/*{this.state.isAuth && <ListBooksComponent/>}*/}
          {!this.state.isAuth && <Login changeAuth={this.setAuth}/>}
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
