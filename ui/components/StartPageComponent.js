import React from 'react';
import {Image, StyleSheet, View, Text} from "react-native";

export default () => {
    return (<View style={styles.view}>
        <Text style={styles.text}>Bananas</Text>
        <Image source={require('./../../assets/images/bananas-icon.png')}  style={styles.image} />
    </View>)
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor:"#fce82f"
    },
    text:{
        fontSize: 35,
        color:'black',
        textAlign: 'center',
        marginTop:25,
        fontFamily: "Nexa_Script_Heavy"
    },
    image:{
        alignSelf: "center",
        width: 200,
        height: 200,
        resizeMode: Image.resizeMode.contain
    }
});

