import React, { Component } from 'react';
import {
  StyleSheet,
    View,
    AsyncStorage,
} from 'react-native';

import StartPageComponent from './ui/components/StartPageComponent'

export default class App extends Component{
  constructor(){
    super();
    this.state = {
        token:null
    }
  }

   async componentDidMount(){
       let token = await AsyncStorage.getItem('token');
       this.setState({token})
    }

  render() {
    return (
      <View style={styles.container}>
         <StartPageComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
