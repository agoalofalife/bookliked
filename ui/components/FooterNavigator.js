import React from 'react';
import { BottomNavigation, Tab } from 'react-router-navigation'
import {StyleSheet} from "react-native";
import RegistrationComponent from './../../ui/components/RegistrationComponent'

export default () => {
    return (
    <BottomNavigation lazy={false} tabActiveTintColor="black" tabBarStyle={styles.bottom}>
    <Tab label="Регистрация чеков" path="/"  />
    <Tab label="Призы" path="/prizes"/>
    </BottomNavigation>
    )
}
const styles = StyleSheet.create({
    bottom: {
       backgroundColor:"#fce82f"
    }
});