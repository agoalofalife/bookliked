import React from 'react';
import {Button, Footer, FooterTab,Text } from 'native-base';
import { BottomNavigation, Tab } from 'react-router-navigation'

export default () => {
    return (
        <BottomNavigation lazy={false} tabActiveTintColor="blue">
        <Tab label="Регистрация чеков" path="/" />
        <Tab label="Призы" path="/main" />
        </BottomNavigation>
    )
}