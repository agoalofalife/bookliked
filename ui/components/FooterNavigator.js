import React from 'react';
import { BottomNavigation, Tab } from 'react-router-navigation'
import {StyleSheet} from "react-native";

export default () => {
    return (
    <BottomNavigation lazy={false} tabActiveTintColor="black" tabBarStyle={{backgroundColor: "#fce82f"}}>
    <Tab label="Регистрация чеков" path="/"  />
    <Tab label="Призы" path="/main" />
    </BottomNavigation>
    )
}
const styles = StyleSheet.create({
    bottom: {
       backgroundColor:"#fce82f"
    }
});