import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        marginTop:5,
        textAlign:'center',
        fontSize: 12,
    },
    photo: {
        marginLeft:10,
        height: 120,
        width: 120,
        resizeMode: Image.resizeMode.contain,
    },
});

// todo try pass only name property es6
export default (props) => (
    <TouchableOpacity onPress={() => {
        console.log('choose book')
    }}>
        <Image source={{ uri: props.book.url}} style={styles.photo} />
        <Text style={styles.text}>
            {`${props.book.title}`}
        </Text>
    </TouchableOpacity>
)