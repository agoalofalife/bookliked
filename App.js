import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage,
} from 'react-native';

import { Container, Content} from 'native-base';

import StartPageComponent from './ui/components/StartPageComponent'
import AuthComponent from './ui/components/AuthComponent'

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
          <Container style={{ backgroundColor:"#fce82f"}}>
           <Content>
           <StartPageComponent/>
           <AuthComponent/>
          </Content>
          </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
