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

import AuthContainer from './containers/AuthContainer'

class App extends Component{
  render() {

    return (
      <View style={styles.container}>
    <Navigation hideNavBar>
      <Card
        exact
        path="/"
        component={AuthContainer}/>
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
// TODO @link https://stackoverflow.com/questions/47627818/performing-authentication-on-routes-with-react-router-v4/47628941#47628941
// private route hoc
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


const mapStateToProps = (state) => 
 ({
    isAuth: state.auth.isAuth
 });

export default connect(
  mapStateToProps,
)(App)

