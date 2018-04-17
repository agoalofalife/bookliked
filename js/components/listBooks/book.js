import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    text: {
        marginTop:5,
        textAlign:'center',
        fontSize: 12,
    },
    photo: {
        marginLeft:15,
        height: 110,
        width: 110,
        resizeMode: Image.resizeMode.contain,
    },
});

export default (props) => (
    <View>
        <Image source={{ uri: props.book.url}} style={styles.photo} />
        <Text style={styles.text}>
            {`${props.book.title}`}
        </Text>
    </View>
)