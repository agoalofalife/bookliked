import React from 'react';
import {Redirect } from 'react-router'
import { Card } from 'react-router-navigation'

// export default ({...props}) => {
export default (Component, isAuth, path, ...props) => {
    if(!isAuth) {
        return <Redirect to="/" />
    }

    return <Card path={path} component={Component} {...props} />
}
