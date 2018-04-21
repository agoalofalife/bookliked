import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AsyncStorage,
    Text,
} from 'react-native';

import AuthComponent from './ui/components/AuthComponent'
import FooterNavigator from './ui/components/FooterNavigator'
import StartPageComponent from './ui/components/StartPageComponent'
import { addTokenAction, removeTokenAction } from './store/actions/auth';
import { connect } from 'react-redux';
import { Card, Navigation } from 'react-router-navigation'
import { Switch, Route, Redirect } from 'react-router'
import {Link} from 'react-router-native'


class App extends Component{
    async componentDidMount(){
       let token = await AsyncStorage.getItem('token');
       this.setState({token})
    }

  render() {
    return (
      <View style={styles.container}>
          {/*<AuthComponent/>*/}
          {/*<FooterNavigator/>*/}
       
    <Navigation hideNavBar>
      <Card
        exact
        path="/"
        component={StartPageComponent}
      />
      <Card path="/hello" render={() => <Text>Hello</Text>} />
      <Card path="/auth" component={AuthComponent} />
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

