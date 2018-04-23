import React, { Component } from 'react';
import AuthComponent from './../ui/components/AuthComponent'
import { connect } from 'react-redux';
import {
    AsyncStorage,
} from 'react-native';
import { addTokenAction, loadAuthAction, isNotLoadAuthAction, signInAction } from './../store/actions/auth';

class AuthContainer extends Component{
	 componentDidMount(){
         this.props.dispatchLoadAuth();
         if (this.props.token === null){
             AsyncStorage.getItem('token').then( token => {
                 console.info(token, 'token')
                 if (token === null){
                     this.props.dispatchIsNotLoadAuth()
                 } else {
                     this.props.history.push('/menu')
                 }
             })
         } else {
             this.props.history.push('/menu')
         }
    }

    navigateMenu(){
        this.props.history.push('/menu')
    }
	render(){
		return (
	<AuthComponent {...this.props} navigateMenu={this.navigateMenu.bind(this)}/>
	)
	}
}

const mapStateToProps = (state) => 
 ({
      isAuth: state.auth.isAuth,
      load:state.auth.load,
      token: state.auth.token,
 });

const mapDispatchToProps = (dispatch) => 
  ({
    dispatchAddToken(token){
      dispatch(addTokenAction(token))
    },
    dispatchSignIn : (login, password) => {
    dispatch(loadAuthAction());
    dispatch(signInAction(login, password))
    return new Promise((resolve, reject) => {
        resolve(true)
    })
    },
    dispatchLoadAuth(){
        dispatch(loadAuthAction());
    },
    dispatchIsNotLoadAuth(){
        dispatch(isNotLoadAuthAction());
    }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)

