import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import FooterNavigator from './ui/components/FooterNavigator'
import { addTokenAction, removeTokenAction } from './store/actions/auth';
import { connect } from 'react-redux';
import { Card, Navigation } from 'react-router-navigation'
import { Switch, Route, Redirect } from 'react-router'
import {Link} from 'react-router-native'

import AuthContainer from './containers/AuthContainer'

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
    <Navigation hideNavBar>
      <Card
        exact
        path="/"
        component={AuthContainer} onEnter={(nextState, replace) => {
         console.log(nextState, replace, '...')
        }}
      />

      <Card path="/menu" component={FooterNavigator} />
     {/* <Card path="/menu" component={FooterNavigator} onEnter={(nextState, replace) => {
        replace({
        pathname: '/'
        })
      }
  }/>*/}
    </Navigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


const mapStateToProps = (state) => 
 ({
    token: state.auth.token
 });

const mapDispatchToProps = (dispatch) => 
  ({
    dispatchAddToken(token){
      dispatch(addTokenAction(token))
    },
    dispatchDeleteToken(){
      dispatch(removeTokenAction())
    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

