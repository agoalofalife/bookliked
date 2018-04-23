import React from 'react';
import {Redirect } from 'react-router'
import { Card } from 'react-router-navigation'

export default ({component: Component, ...props }) => {

    // if(!isAuth) {
    console.log(Component, 'components')
        console.log(props, 'isAuth')
    //     console.log('redirect')
    //     return <Redirect to="/menu" />
    // }

    return <Card component={Component} {...this.props} />
}
