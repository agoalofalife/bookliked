import React, { Component } from 'react';
import {
  StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListBooksComponent from './js/components/listBooks/index';
import { SearchBar, Input } from 'react-native-elements'
import Login from './js/components/login/index'

import Book from './js/components/book/index'


const {height, width} = Dimensions.get('window');
const widthLogoBananas = 230;
const heightLogoBananas = 230;
const marginLeftBananas = (width - widthLogoBananas)/2;
const marginTopBananas = (height - heightLogoBananas)/8;

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
          <View style={{backgroundColor:"#fce82f", flex:1}}>
            <Text style={{ fontSize: 40, color:'black', textAlign: 'center', marginTop:30, fontFamily: "Nexa_Script_Heavy"}}>Bananas</Text>
              <Image source={require('./assets/images/bananas-icon.png')}  style={{marginLeft:marginLeftBananas,marginTop:marginTopBananas,width: widthLogoBananas, height: heightLogoBananas, resizeMode: Image.resizeMode.contain,}} />
          </View>
          {/*{this.state.isAuth &&*/}
              {/*<SearchBar*/}
              {/*showLoading*/}
              {/*onChangeText={() => { console.log('change text')}}*/}
              {/*onClear={() => { console.log('clear text')}}*/}
              {/*platform="android"*/}
              {/*cancelButtonTitle="Cancel"*/}
              {/*placeholder='Какая книга?'/>}*/}

          {/*{this.state.isAuth && <ListBooksComponent/>}*/}
          {/*{!this.state.isAuth && <Login changeAuth={this.setAuth}/>}*/}
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
