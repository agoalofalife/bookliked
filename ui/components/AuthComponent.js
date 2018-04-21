import React from 'react'

import {
    StyleSheet,
} from 'react-native';
import {Tabs,Tab } from 'native-base';
import SignInComponent from './SignInComponent';
import RegistrationComponent from './RegistrationComponent';

export default () => (
    <Tabs initialPage={0} style={styles.tabs}>
        <Tab heading="Вход">
            <SignInComponent/>
        </Tab>
        <Tab heading="Регистрация">
            <RegistrationComponent/>
        </Tab>
    </Tabs>
)
const styles = StyleSheet.create({
        tabs: {
            borderRadius:50,
            width:350,
            alignSelf: "center"
        }
    },
);
