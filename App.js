import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage,
} from 'react-native';

import StartPageComponent from './ui/components/StartPageComponent'
import SignInComponent from './ui/components/SignInComponent'

import { Container, Content,Right, Switch, Tabs, Tab } from 'native-base';



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
               <Right>
                   <Switch value={false} />
               </Right>
         <StartPageComponent/>
               <Tabs initialPage={1}>
                   <Tab heading="Вход">
                       {/*<Tab1 />*/}
                   </Tab>
                   <Tab heading="Регистрация">
                       {/*<Tab2 />*/}
                   </Tab>
               </Tabs>
         <SignInComponent/>
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
