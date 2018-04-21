import React from 'react'

import {
    StyleSheet,
} from 'react-native';

import {Tabs,Tab,Container,Content } from 'native-base';
import SignInComponent from './SignInComponent';
import RegistrationComponent from './RegistrationComponent';
import StartPageComponent from './StartPageComponent';

export default () => (
    <Container style={{ backgroundColor:"#fce82f"}}>
        <Content>
            <StartPageComponent/>
            <Tabs initialPage={0} style={styles.tabs}>
                <Tab heading="Вход">
                    <SignInComponent/>
                </Tab>
                <Tab heading="Регистрация">
                    <RegistrationComponent/>
                </Tab>
            </Tabs>
        </Content>
    </Container>
)