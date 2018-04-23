import React, { Component } from 'react';
import AuthComponent from './../ui/components/AuthComponent'
import { connect } from 'react-redux';
import {
    AsyncStorage,
} from 'react-native';
import { addTokenAction, loadAuthAction, isNotLoadAuthAction } from './../store/actions/auth';

class AuthContainer extends Component{
	 componentDidMount(){
         loadAuthAction();
	     if (this.props.token === null){
             AsyncStorage.getItem('token').then( token => {
                 console.info(token, 'token')
                 if (token === null){
                     isNotLoadAuthAction()
                 } else {
                     this.props.history.push('/menu')
                 }
             })
         } else {
             this.props.history.push('/menu')
         }
    }

	render(){
		return (
	<AuthComponent {...this.props}/>
	)
	}
}

const mapStateToProps = (state) => 
 ({
      isAuth: state.auth.isAuth,
      token: state.auth.token,
 })

const mapDispatchToProps = (dispatch) => 
  ({
    dispatchAddToken(token){
      dispatch(addTokenAction(token))
    },
    dispatchFetchToken : () => {
	const asyncGetToken = () => {	
      return async dispatch => {
      let token = await AsyncStorage.getItem('token');
      console.log(token)
      if  (token === null) {
          setTimeout(() => {
                   dispatch(addTokenAction('token'))
           }, 1000)
      } else {
          dispatch(addTokenAction('token'))
      }

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
)(AuthContainer)

