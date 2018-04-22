import React, { Component } from 'react';
import AuthComponent from './../ui/components/AuthComponent'
import { connect } from 'react-redux';
import {
    AsyncStorage,
} from 'react-native';
import { addTokenAction } from './../store/actions/auth';

// const AuthContainer = (props) =>
//      <AuthComponent {...props}/>

class AuthContainer extends  Component{

	 componentDidMount(){
       this.props.dispatchFetchToken()
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
     
       // AsyncStorage.getItem('token').then((value)=>{
       // 	console.log(value)
       // })
  		
      	
       // if (token) {
       // 		dispatchAddToken(token)
       // } else{
       		setTimeout(() => {
      		dispatch(addTokenAction('token'))
      	}, 2000)
       // }
      	
      }
  		}
      dispatch(asyncGetToken());
    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)

