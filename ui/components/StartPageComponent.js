import React from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


const {height, width} = Dimensions.get('window');
const widthLogoBananas = 230;
const heightLogoBananas = 230;
const marginLeftBananas = (width - widthLogoBananas)/2;
const marginTopBananas = (height - heightLogoBananas)/8;

export default () => (
    <View style={styles.view}>
        <Text style={styles.text}>Bananas</Text>
        <Image source={require('./../../assets/images/bananas-icon.png')}  style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor:"#fce82f"
    },
    text:{
        fontSize: 40,
        color:'black',
        textAlign: 'center',
        marginTop:30,
        fontFamily: "Nexa_Script_Heavy"
    },
    image:{
        marginLeft:marginLeftBananas,
        marginTop:marginTopBananas,
        width: widthLogoBananas,
        height: heightLogoBananas,
        resizeMode: Image.resizeMode.contain
    }
});

