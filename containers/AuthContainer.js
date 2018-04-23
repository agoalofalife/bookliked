import React, { Component } from 'react';
import AuthComponent from './../ui/components/AuthComponent'
import { connect } from 'react-redux';
import {
    AsyncStorage,
} from 'react-native';
import { addTokenAction } from './../store/actions/auth';
import {  Route, Redirect,withRouter } from 'react-router'

class AuthContainer extends Component{
	 componentDidMount(){
	 	// this.props.history.push('/menu')
       this.props.dispatchFetchToken().then(value => {
           this.props.history.push('/menu')
       })
       // this.setState({token})
    }

	render(){
		return (
	<AuthComponent {...this.props}/>
	)
	}
}

const mapStateToProps = (state) => 
 ({
      isAuth: state.auth.isAuth
 })

const mapDispatchToProps = (dispatch) => 
  ({
    dispatchAddToken(token){
      dispatch(addTokenAction(token))
    },
    dispatchFetchToken : () => {
	const asyncGetToken = () => {	
      return dispatch => {
       setTimeout(() => {
           dispatch(addTokenAction('token'))
       }, 1000)
       // AsyncStorage.getItem('token').then(token => {
       //     console.log(token, 'token')
       // 	if (token === null) {
       //      setTimeout(() => {
       //          dispatch(addTokenAction('token'))
       //      }, 1000)
       //  } else {
       //      dispatchAddToken(token)
       //  }
       // })
      }
    };
    return new Promise((resolve, reject) => {
        dispatch(asyncGetToken());
        resolve(true)
    })

    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthContainer))

