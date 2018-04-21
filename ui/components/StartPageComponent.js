import React from 'react';
import {Image, StyleSheet, View, Text} from "react-native";


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
        alignSelf: "center",
        marginTop:20,
        width: 230,
        height: 230,
        resizeMode: Image.resizeMode.contain
    }
});

