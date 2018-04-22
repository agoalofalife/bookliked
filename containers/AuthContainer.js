import React, { Component } from 'react';
import AuthComponent from './../ui/components/AuthComponent'
import { connect } from 'react-redux';

class AuthContainer extends Component{
    render(){
        <AuthComponent/>
    }
}



export default connect(
  (state) => {
    return {
    token: state.auth.token
    }
  }
)(AuthContainer)

