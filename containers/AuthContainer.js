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
	 	// console.log(this.props)
	 
	 	
	 	// this.props.history.push('/menu')
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
      console.log('here?')
       // AsyncStorage.getItem('token').then((value)=>{
       // 	console.log(value)
       // })
  		
      	
       // if (token) {
       // 		dispatchAddToken(token)
       // } else{
       		setTimeout(() => {
       			dispatch(addTokenAction('token'))
      	}, 1000)
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

