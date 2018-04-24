import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import FooterNavigator from './ui/components/FooterNavigator'
import HomeComponent from './ui/components/HomeComponent'
import { connect } from 'react-redux';
import { Card, Navigation } from 'react-router-navigation'
import PrivateRoute from './hoc/PrivateRoute'
import { Switch, Route, Redirect } from 'react-router'
import AuthContainer from './containers/AuthContainer'

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
    <Navigation hideNavBar>
      {/*<Card*/}
        {/*exact*/}
        {/*path="/"*/}
        {/*component={AuthContainer}/>*/}
        <Card
            exact
            path="/"
            component={HomeComponent}/>
        {PrivateRoute(HomeComponent, this.props.isAuth, '/menu')}
        {/*<Card path="/menu" component={PrivateRoute(FooterNavigator, this.props.isAuth)} />*/}
        {/*<Card path="/menu" component={PrivateRoute(FooterNavigator, this.props.isAuth)} />*/}
        {/*{ PrivateRoute({component:FooterNavigator, isAuth:this.props.isAuth})}*/}
        {/*<PrivateRoute path="/menu" component={FooterNavigator} {...this.props}/>*/}
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
     isAuth: state.auth.isAuth,
 });

export default connect(
  mapStateToProps,
)(App)

