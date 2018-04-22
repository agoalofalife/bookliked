import React, { Component } from 'react';
import AuthComponent from './../ui/components/AuthComponent'
import { connect } from 'react-redux';


export const AuthContainer = (props, { store }) =>
     <AuthComponent {...props}/>


export default connect(
  (state) => {
    return {
    isAuth: state.auth.isAuth
    }
  }
)(AuthContainer)

