import React from 'react';
import {Button, Footer, FooterTab,Text, Container, Content,Drawer } from 'native-base';
import { BottomNavigation, Tab } from 'react-router-navigation'
import FooterComponent from './FooterNavigator';
import DraverContainer from './../../containers/DriverContainer'

export default () => {
    return (
        <Container style={{ backgroundColor:'white'}}>
            <DraverContainer/>
            {/*<FooterComponent/>*/}
        </Container>
    )
}