import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage,
} from 'react-native';

import { Container, Content} from 'native-base';
import StartPageComponent from './ui/components/StartPageComponent'
import AuthComponent from './ui/components/AuthComponent'
import { addTokenAction, removeTokenAction } from './store/actions/auth';
import { connect } from 'react-redux';

class App extends Component{
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddToken: (token) => dispatch(addTokenAction(token)),
    dispatchDeleteToken: () => dispatch(removeTokenAction())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

