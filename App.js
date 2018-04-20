import React, { Component } from 'react';
import {
  StyleSheet,
    View,
} from 'react-native';

import StartPageComponent from './ui/components/StartPageComponent'

export default class App extends Component{
  constructor(){
    super();
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
